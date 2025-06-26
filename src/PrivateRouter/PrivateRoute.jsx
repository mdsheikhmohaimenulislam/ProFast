import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user) {
    <Navigate state={{from: location.pathname}} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
