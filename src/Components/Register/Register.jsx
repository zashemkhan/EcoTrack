import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { register } from "swiper/element";

const Register = () => {
  const {
    createUserFunc,
    updateProfileFunc,
    signinwithpopupFunc,
    loading,
    user,
    signOutFunc,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [passwordError, setPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const validatePassword = (password) => {
    const minLength = 6;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
      return "Password must be at least 6 characters long.";
    }
    if (!upperCase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowerCase.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!specialChar.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;


    setBtnLoading(true);
    const validationMesssage = validatePassword(password);
    if (validationMesssage) {
      setPasswordError(validationMesssage);
      setBtnLoading(false);
      return;
    }

    setPasswordError("");

    createUserFunc(email, password)
      .then((data) => {
        const user = data.user;
        updateProfileFunc(displayName, photoURL);

        fetch("https://eco-track-teal.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        toast.success("succucessfully Complete registration");
        signOutFunc();
        navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please login.");
          return;
        }
      })
      .finally(() => setBtnLoading(false));
  };

  const handleGoogleSignIn = () => {
    signinwithpopupFunc()
      .then((result) => {
        const user = result.user;
        fetch("https://eco-track-teal.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        navigate(location.state || "/");
        toast.success("successfylly sign up with google");
      })
      .catch((error) => {
        toast.error(error.message);
        return;
      });
  };
  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="py-20">
      <div className="card bg-[#138661] text-white w-full mx-auto my-20 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Join EcoTrack</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset ">
              {/* name field */}
              <label className="label ">Name</label>
              <input
                type="text"
                name="displayName"
                className="input text-black rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Name"
                required
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input text-black rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Email"
                required
              />
              {/*photo  */}
              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input text-black rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
                required
              />
              <div className="mt-0.5 relative">
                <label className="label">Password</label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="input mt-1  text-black rounded-lg   focus:outline-none"
                  placeholder="Password"
                  required
                />
                <button
                  className="absolute bottom-3.5 right-8"
                  onClick={handleShowPass}
                >
                  {showPass ? (
                    <FaEyeSlash className=" text-black  size-3.5" />
                  ) : (
                    <FaEye className=" text-black  size-3.5" />
                  )}
                </button>
              </div>
              <div className="text-red-200 font-semibold text-sm mt-0.5">
                {passwordError}
              </div>
              <button
                type="submit"
                className="btn hover:to-emerald-900 border-none shadow-none text-white mt-3 rounded-lg bg-linear-to-r from-green-300 to-green-800 "
              >
                {btnLoading ? (
                  <span className="loading loading-ring loading-md min-h-screen mx-auto flex justify-center"></span>
                ) : (
                  "Register"
                )}
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-lg text-black border-none shadow-none"
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center">
            Already have an account? Please{" "}
            <Link className="text-black hover:text-white" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
