import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user) {
    <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
