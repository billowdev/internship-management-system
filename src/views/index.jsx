import React from "react";
import Signin from "./components/Signin";
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import InternshipForm from "./internship-form";
import StudentList from "./student-list";
import Resume from "./resume";
import ProtectedRoutes from "./ProtectedRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./admin";

const App = () => (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/internship-form" element={<InternshipForm />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>

);

export default App;
