import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { loadState } from "../../helpers/Persist";
import { loadSignout } from "../../redux/actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(loadSignout);
    localStorage.clear();
    navigate("/");
  };
  const [isAuth, setIsAuth] = useState({});
  const [who, setWho] = useState({});
  useEffect(() => {
    setIsAuth(loadState("auth-state"));
    setWho(loadState("profile"));
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-sky-400">
        <div className="items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="hidden md:block">
                {isAuth && (
                  <div className="ml-10 flex items-baseline space-x-4">
                    {isAuth?.roles === "student" ? (
                      <>
                        <Link
                          to="/student/home"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          หน้าหลัก
                        </Link>

                        <Link
                          to="/student/internship-form"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          สถานที่ฝึกงาน
                        </Link>

                        <Link
                          to="/student/resume"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          ประวัติส่วนตัว
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}

                    {!isAuth?.roles === "director" ? (
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

                    {isAuth?.roles === "admin" ? (
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

                    {/* {!isAuth && (
                      <Link
                        to="/"
                        className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                      >
                        เข้าสู่ระบบ
                      </Link>
                    )} */}
                  </div>
                )}
              </div>
            </div>

            <div>
              {isAuth && isAuth?.roles === "director" ? (
                <>
                  <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    คณะกรรมการฝึกประสบการณ์วิชาชีพ
                  </span>
                </>
              ) : (
                <></>
              )}
              {isAuth && isAuth?.roles === "admin" ? (
                <>
                  <div>
                    <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      admin
                    </span>
                  </div>
                </>
              ) : (
                <></>
              )}
              {isAuth && isAuth?.roles === "student" ? (
                <>
                  <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    นักศึกษา
                  </span>
                </>
              ) : (
                <></>
              )}
              {isAuth && (
                <Link
                  to="/"
                  onClick={(e) => {
                    handleLogout();
                  }}
                  className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor:pointer"
                >
                  ออกจากระบบ
                </Link>
              )}
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
                {isAuth && (
                  <div className="ml-10 flex items-baseline space-x-4">
                    {isAuth?.roles === "student" ? (
                      <>
                        <Link
                          to="/student/home"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          หน้าหลัก
                        </Link>

                        <Link
                          to="/student/internship-form"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          สถานที่ฝึกงาน
                        </Link>

                        <Link
                          to="/student/resume"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          ประวัติส่วนตัว
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}

                    {!isAuth?.roles === "director" ? (
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

                    {isAuth?.roles === "admin" ? (
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
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
