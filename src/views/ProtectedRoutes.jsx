import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadAuth } from "../application/actions/auth";
import { getAuth } from "../application/selectors/auth";
import { loadState } from "../helpers/Persist";
const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuth);

  useEffect(() => {
    dispatch(loadAuth);
  }, [dispatch]);
  console.log()
  const user = { loggedIn: isAuth?.authenticated };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
