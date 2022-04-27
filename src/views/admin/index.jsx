import React from "react";
import Login from "./manages/Login";

import Controllers from "./Controllers";
import { Outlet } from "react-router-dom";


function Admin() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Admin;
