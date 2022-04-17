import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Home from "./Home";


export default () => {
  return (
    <Router>
      <>
        <Toaster 
        position="top-right"
        reverseOrder={false}
        />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    </Router>
  );
};
