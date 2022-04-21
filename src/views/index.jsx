import React from "react";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import InternshipForm from "./internship-form";
import StudentList from "./student-list";
import Resume from "./resume";
import ProtectedRoutes from "./ProtectedRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./admin";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Welcome from "./components/Welcome";

const ROLES = {
  User: "student",
  Director: "director",
  Admin: "admin",
};

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
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Signin />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* protect rotes */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[ROLES.User, ROLES.Director, ROLES.Admin]}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="internship-form" element={<InternshipForm />} />
          <Route path="resume" element={<Resume />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Director, ROLES.Admin]} />}
        >
          <Route path="/" element={<Welcome />} />
          <Route path="student-list" element={<StudentList />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  </>
);

export default App;
