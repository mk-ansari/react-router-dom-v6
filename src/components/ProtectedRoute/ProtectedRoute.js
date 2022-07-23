import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, adminRoute, isAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
