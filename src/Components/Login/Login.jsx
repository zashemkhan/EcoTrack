import React, { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const { loginFunc, signinwithpopupFunc, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  if (loading) {
    return (
      <span className="loading loading-ring loading-md min-h-screen mx-auto flex justify-center"></span>
    );
  }

  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginFunc(email, password)
      .then((data) => {
        const user = data.user;
        navigate(location.state || "/");
        toast.success("login successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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

  return (
    <div className="py-20 min-h-screen flex items-center justify-center ">
      <div className="card bg-[#138661] text-white w-full mx-auto py-10 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body ">
          <h1 className="text-3xl font-bold text-center">Login EcoTrack</h1>
          <form onSubmit={handlelogin}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input text-black rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Email"
                required
                ref={emailRef}
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input text-black rounded-lg focus:border-0 focus:outline-gray-200"
                placeholder="Password"
                required
              />
              <div className=" mt-1">
                <Link to="/forgetPass">
                  <p className="link link-hover">Forgot password?</p>
                </Link>
              </div>
              <button className="btn text-white mt-3 rounded-lg bg-linear-to-r from-green-300 to-green-800 border-none hover:to-emerald-900 shadow-none">
                Login
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
