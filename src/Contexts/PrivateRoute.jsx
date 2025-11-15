import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mx-auto flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg text-green-600  "></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
