import React from "react";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import InternshipForm from "./internship-form";
import StudentList from "./student-list";
import Resume from "./resume";
import ProtectedRoutes from "./ProtectedRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
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
        <Route index path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/internship-form" element={<InternshipForm />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  </Router>
);

export default App;
