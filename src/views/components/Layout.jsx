import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = () => (
  <>
    <header className="">
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
