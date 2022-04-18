import React from "react";

const Navbar = () => 
<nav className="flex items-center space-x-5">
  <div>
    <span className="w-44 object-contain cursor-pointer text-2xl font-[Poppins]">
      <img
      alt="snru-logo"
        className="h-10 inline"
        src="https://www.snru.ac.th/wp-content/themes/core/img/site-logo.png"
      />
    </span>
  </div>
  <div className="flex items-center space-x-5 ">SNRU Internship</div>
</nav>

export default Navbar;
