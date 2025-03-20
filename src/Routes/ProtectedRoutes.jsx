import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("adminToken"); 
  const isAdmin = localStorage.getItem("role") === "admin"; 

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" />;  
  }

  return children;  
};

export default ProtectedRoutes;
