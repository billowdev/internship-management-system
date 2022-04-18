import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./home";
import InternshipForm from "./internship-form";
import StudentList from "./student-list";
import Resume from "./resume";



const App = () => 
<Router>
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/internship-form" element={<InternshipForm />} />
      <Route path="/student-list" element={<StudentList />} />
      <Route path="/resume" element={<Resume />} />

      

    </Routes>
  </>
</Router>


export default App;
