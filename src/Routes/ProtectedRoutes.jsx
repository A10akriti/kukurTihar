import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Example: Check token in localStorage
  const isAdmin = localStorage.getItem("role") === "admin"; // Example: Check role in localStorage

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
