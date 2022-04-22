import { useLocation, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../../helpers/Persist";
import React, { useState, useEffect } from "react";

const RequireAuth = ({ allowedRoles }) => {
  const [authState, setauthState] = useState(loadState("auth-state"));
  useEffect(() => {
    const auth = loadState("auth-state");
    setauthState(auth);
  }, []);

  let roles = authState?.roles;

  const location = useLocation();

  return allowedRoles.includes(roles)
   ? (
    <Outlet />
  ) : authState?.id ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
