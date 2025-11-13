import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, signOutFunc } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};
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

  return (
    <div className=" min-h-screen flex justify-center items-center  bg-gradient-to-br from-green-100 to-blue-50  ">
      <div className=" lg:w-1/3 w-[350px] lg:py-20 p-8 bg-[#13866120] shadow-xl rounded-lg hover:shadow-2xl  transition-all duration-300 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              src={photoURL}
              alt={displayName}
              className="rounded-full object-cover border-4 shadow-md border-green-900 w-32 h-32"
            />
            <span className="absolute top-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">{displayName}</h2>
        <p className="text-gray-500 mb-4 mt-1">{email}</p>

        <button
          onClick={handlesignOut}
          className="px-4 py-2  border-gray-300 hover:bg-gray-100 rounded-lg shadow-sm transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
