import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Controllers from "./Controllers";

const StudentHome = () => {
  return (
    <div>
      <Controllers />
      <Outlet />
    </div>
  );
};

export default StudentHome;
