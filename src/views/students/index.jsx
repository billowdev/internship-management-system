import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
// import Controllers from "./Controllers";
import { loadResume } from "../../redux/actions/student/resume";
import { loadInternship } from "../../redux/actions/student/internship";
import { useDispatch } from "react-redux";

const StudentHome = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadResume);
    dispatch(loadInternship);
  }, [dispatch]);

  return (
    <div>
      {/* <Controllers /> */}
      <Outlet />
    </div>
  );
};

export default StudentHome;
