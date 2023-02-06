import React, { ReactElement } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: ReactElement }> = ({ children }) => {
  const { currentUser } = useAuth() || {};

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
