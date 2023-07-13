import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
  const { isAuthorized } = useAuth();

  if (isAuthorized(role)) return <>{children}</>;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
