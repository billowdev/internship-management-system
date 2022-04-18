import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="container flex justify-between h-12 mx-auto">
    <ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
        <Link
        to="/"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent bg-link bg-link-hover"
        >
          HOME
        </Link>
      </li>
      <li className="flex">
        <Link
        to="/internship-form"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent bg-link bg-link-hover"
        >
          INTERNSHIP
        </Link>
      </li>
      <li className="flex">
        <Link
        to="/resume"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent bg-link bg-link-hover"
        >
          RESUME
        </Link>
      </li>
      <li className="flex">
        <Link
        to="/student-list"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent bg-link bg-link-hover"
        >
          STUDENT LIST
        </Link>

      </li>
    </ul>
    <div className="items-center flex-shrink-0 hidden lg:flex">
      <button className="px-8 py-3 font-semibold rounded bg-gray-200 hover:bg-gray-50">
      <ion-icon name="log-out-outline"></ion-icon> ออกจากระบบ
      </button>
    </div>
  </nav>

);

export default Navbar;
