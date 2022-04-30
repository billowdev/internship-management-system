import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { loadState } from "../../helpers/Persist";
import { loadSignout } from "../../redux/actions/auth";
import Swal from "sweetalert2";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "ออกจากระบบ?",
      text: "คุณต้องการออกจากระบบใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(loadSignout);
        localStorage.clear();
        navigate("/");
      }
    });
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
                    {isAuth?.roles === "director" ? (
                      <>
                        <Link
                          to="/director/internship/pending"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          รายการฝึกประสบการณ์วิชาชีพ :
                          <span className="ml-2 bg-yellow-200 text-black rounded-lg px-2 py-1">
                            รอยืนยัน
                          </span>
                        </Link>
                        <Link
                          to="/director/internship/confirm"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          รายการฝึกประสบการณ์วิชาชีพ :
                          <span className="ml-2 bg-green-200 text-black rounded-lg px-2 py-1">
                            ยืนยันแล้ว
                          </span>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}

                    {isAuth?.roles === "admin" ? (
                      <>
                        <Link
                          to="/admin/manage/login"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          ข้อมูลสมาชิกทั้งหมด
                        </Link>
                        <Link
                          to="/admin/manage/login/add"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          เพิ่มสมาชิก
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              {isAuth && isAuth?.roles === "director" ? (
                <>
                  <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    สถานะ : คณะกรรมการฝึกประสบการณ์วิชาชีพ
                  </span>
                </>
              ) : (
                <></>
              )}
              {isAuth && isAuth?.roles === "admin" ? (
                <>
                  <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    สถานะ : admin
                  </span>
                </>
              ) : (
                <></>
              )}
              {isAuth && isAuth?.roles === "student" ? (
                <>
                  <span className="items-center hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    สถานะ : นักศึกษา
                  </span>
                </>
              ) : (
                <></>
              )}
              {isAuth && (
                <button
                  onClick={(e) => {
                    handleLogout();
                  }}
                  className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor:pointer"
                >
                  ออกจากระบบ
                </button>
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
                    {isAuth?.roles === "director" ? (
                      <>
                        <Link
                          to="/director/internship/pending"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          รายการฝึกประสบการณ์วิชาชีพ :
                          <span className="ml-2 bg-yellow-200 text-black rounded-lg px-2 py-1">
                            รออนุมัติ
                          </span>
                        </Link>
                        <Link
                          to="/director/internship/confirm"
                          className="text-white hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          รายการฝึกประสบการณ์วิชาชีพ :
                          <span className="ml-2 bg-green-200 text-black rounded-lg px-2 py-1">
                            อนุมัติแล้ว
                          </span>
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}

                    {isAuth?.roles === "admin" ? (
                      <>
                        <Link
                          to="/admin/manage/login"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          ข้อมูลสมาชิกทั้งหมด
                        </Link>
                        <Link
                          to="/admin/manage/login/add"
                          className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          เพิ่มสมาชิก
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}
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
