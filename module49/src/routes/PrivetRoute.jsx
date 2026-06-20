import { use } from "react";
import { AuthContext } from "../contexts/authContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivetRoute;
