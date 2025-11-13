// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh16yUNdy0L3GhAF1zcp8VU_e-mwG5Gu8",
  authDomain: "ecotrack-994d1.firebaseapp.com",
  projectId: "ecotrack-994d1",
  storageBucket: "ecotrack-994d1.firebasestorage.app",
  messagingSenderId: "31853173587",
  appId: "1:31853173587:web:4b61e0db5902594b299fa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
