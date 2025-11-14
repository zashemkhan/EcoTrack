import React, { useContext, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { loginFunc, signinwithpopupFunc, loading } = useContext(AuthContext);
  const [showPass, setShowPass] = useState("text");
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const [btnLoading, setBtnLoading] = useState(false);

  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("clicked");

    setBtnLoading(true);

    loginFunc(email, password)
      .then((data) => {
        const user = data.user;
        event.target.reset();
        navigate(location.state || "/");
        toast.success("login successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setBtnLoading(false));
  };

  const handleGoogleSignIn = () => {
    signinwithpopupFunc()
      .then((result) => {
        navigate(location.state || "/");
        toast.success("successfylly sign up with google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="py-20 min-h-screen flex items-center justify-center ">
      <div className="card bg-[#138661] text-white w-full mx-auto py-10 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h1 className="text-3xl font-bold text-center">Login to EcoTrack</h1>
          <form onSubmit={handlelogin}>
            <fieldset className="fieldset ">
              {/* email field */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input focus:outline-none mt-1 text-black rounded-lg "
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>

              {/* password */}
              <div className="mt-2 relative">
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

              <Link to="/forgetPass">
                <p className="link link-hover">Forgot password?</p>
              </Link>

              <button
                type="submit"
                disabled={btnLoading}
                className="btn text-white mt-3 rounded-lg bg-linear-to-r from-green-300 to-green-800 border-none hover:to-emerald-900 shadow-none"
              >
                {btnLoading ? (
                  <span className="loading loading-ring loading-md min-h-screen mx-auto flex justify-center"></span>
                ) : (
                  "Log in"
                )}
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-lg text-black color-base-100 border-none shadow-none "
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center">
            Dont have an account? Please{" "}
            <Link className="text-black hover:text-white" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
