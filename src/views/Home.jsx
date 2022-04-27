import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadState } from "../helpers/Persist";
import { Link, Navigate } from "react-router-dom";

import { loadInternship } from "../redux/actions/student/internship";
import { loadResume } from "../redux/actions/student/resume";

const Home = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState({});

  useEffect(() => {
    // dispatch(loadProfile);
    dispatch(loadResume);
    dispatch(loadInternship);
  }, [dispatch]);

  useEffect(() => {
    setIsAuth(loadState("auth-state"));
  }, []);
  return (
    <>
      <div className="wrapper bg-gray-200 antialiased ">
        {isAuth?.roles === "admin" ? (
          <>
            <Navigate to="/admin" />
          </>
        ) : isAuth?.roles === "director" ? (
          <>
            <Navigate to="/student-list" />
          </>
        ) : isAuth?.roles === "student" ? (
          <>
           <Navigate to="/student/home" />
          </>
        ) : (
          <>
            {/* <div className="wrapper text-center">
              <h1>404 Not Found</h1>
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
