import React from "react";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import InternshipForm from "./students/InternshipForm";
import StudentList from "./teachers";
import Resume from "./students/ResumeForm";
import StudentHome from "./students";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./admin";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Login from "./admin/manages/Login";
import StudentHomePage from "./students/StudentHomePage";
import LoginAdd from "./admin/manages/LoginAdd";
import LoginUpdate from "./admin/manages/LoginUpdate";

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
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="student" element={<StudentHome />}>
            <Route path="home" element={<StudentHomePage />} />
            <Route path="resume" element={<Resume />} />
            <Route path="internship-form" element={<InternshipForm />} />
          </Route>
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Director, ROLES.Admin]} />}
        >
          <Route path="student-list" element={<StudentList />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />}>
            <Route path="manage/login" element={<Login />} />
            <Route path="manage/login/add" element={<LoginAdd />} />
            <Route path="manage/login/update" element={<LoginUpdate />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  </>
);

export default App;
