import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => (
  <>
    <header className="">
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
