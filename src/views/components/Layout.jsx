import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => (
  <>
    <header className="bg-sky-400 flex justify-between p-5 max-w-8xl mx-auto">
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
