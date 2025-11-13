import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);


  //   registration
  const createUserFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const loginFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   observer
  useEffect(() => {
    setLoading(true);
    const unsubscriber = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unsubscriber;
    };
  }, []);

  // updateProfile
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  //   signinwithpopup
  const signinwithpopupFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   signOut
  const signOutFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   forgetPass
  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUserFunc,
    loginFunc,
    updateProfileFunc,
    signinwithpopupFunc,
    signOutFunc,
    forgetPass,
    user,
    setUser,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
