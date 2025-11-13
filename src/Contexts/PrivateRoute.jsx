import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  if (loading) {
    return (
      <span className="loading loading-ring loading-md min-h-screen mx-auto flex justify-center"></span>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
