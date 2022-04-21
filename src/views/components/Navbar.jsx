import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { loadSignout } from "../../application/actions/auth";
import { loadState } from "../../helpers/Persist";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(loadSignout);
    navigate("/");
  };
  const [isAuth, setIsAuth] = useState({});
  useEffect(() => {
    setIsAuth(loadState("auth-state"));
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const component = React.createRef();
  return (
    <nav className="bg-sky-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-44"
                src="https://www.snru.ac.th/wp-content/themes/core/img/site-logo.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              {isAuth && (
                <div className="ml-10 flex items-baseline space-x-4">
                  {isAuth?.permission === "student" ? (
                    <>
                      <Link
                        to="/"
                        className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        หน้าหลัก
                      </Link>

                      <Link
                        to="/internship-form"
                        className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        สถานที่ฝึกงาน
                      </Link>

                      <Link
                        to="/resume"
                        className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        ประวัติส่วนตัว
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}

                  {!isAuth?.permission === "director" ? (
                    <>
                      <Link
                        to="/"
                        className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        หน้าหลัก
                      </Link>
                      <Link
                        to="/student-list"
                        className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        รายชื่อนักศึกษา
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}

                  {isAuth?.permission === "admin" ? (
                    <>
                      <Link
                        to="/"
                        className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        หน้าหลัก
                      </Link>
                      <Link
                        to="/student-list"
                        className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        รายชื่อนักศึกษา
                      </Link>

                      <Link
                        to="/admin"
                        className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        admin
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}

                  {!isAuth && (
                    <Link
                      to="/"
                      className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                    >
                      เข้าสู่ระบบ
                    </Link>
                  )}

                  <Link
                    to="/"
                    onClick={(e) => {
                      handleLogout();
                    }}
                    className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor:pointer"
                  >
                    ออกจากระบบ
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/home"
                className="hover:bg-sky-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                หน้าหลัก
              </Link>

              <Link
                to="/internship-form"
                className="text-white hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                สถานที่ฝึกงาน
              </Link>

              <Link
                to="/resume"
                className="text-white hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                ประวัติส่วนตัว
              </Link>

              <Link
                to="/student-list"
                className="text-white hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                รายชื่อนักศึกษา
              </Link>

              <Link
                to="/"
                className="text-white hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                to="/logout"
                className="text-white hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                ออกจากระบบ
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
