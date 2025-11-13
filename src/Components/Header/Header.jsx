import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { LuSquareActivity } from "react-icons/lu";

const Header = () => {
  const { signOutFunc, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlesignOut = () => {
    signOutFunc()
      .then(() => {
        navigate("/login");
        toast.success("signOut successfull");
      })
      .catch((error) => {
        toast.error(toast.message);
      });
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "border-b" : "text-white")}
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b" : "text-white"
        }
        to="/challenges"
      >
        <li>Challenges</li>
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            to="/challenges/add"
          >
            <li>Create A Challegne</li>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className=" shadow-sm  bg-[#138661] text-white py-2 ">
      <div className="navbar  mx-auto w-11/12   p-0">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-42 p-2 shadow  bg-[#13866190] text-black space-y-3 font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost text-2xl font-bold">
              Eco Track{" "}
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          {loading ? (
            <span className="loading loading-ring loading-md flex items-center justify-center"></span>
          ) : user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-[#13866190] rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200 space-y-2">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="">
                  <Link to="/myprofile">
                    <FaUser /> My Profile
                  </Link>
                </li>
                <li className="">
                  <Link to="/myactivities">
                    {" "}
                    <LuSquareActivity /> My Activities
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handlesignOut}
                    className="btn btn-xs text-left border-none hover:to-emerald-900 bg-linear-to-r from-green-300 to-green-800 text-white"
                  >
                    <IoLogOut /> Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn hover:to-emerald-900 bg-linear-to-r from-green-300 to-green-800 border-none shadow-none text-white">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn hover:to-emerald-900 bg-linear-to-r from-green-300 to-green-800 border-none shadow-none text-white">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
