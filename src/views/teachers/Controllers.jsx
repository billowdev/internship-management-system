import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loadSignout } from "../../redux/actions/auth";

const Controllers = () => {
  function showDropDownMenu(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter").innerText = targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");
  }
  function showDropDownMenuOne(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-one").innerText =
      targetText;
    document.getElementById("drop-down-div-one").classList.toggle("hidden");
  }
  function showDropDownMenutwo(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo(el) {
    const targetText = el.target.innerHTML;
    document.getElementById("drop-down-content-setter-two").innerHTML =
      targetText;
    document.getElementById("drop-down-div-two").classList.toggle("hidden");
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(loadSignout);
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-4 px-2">
              <div className="hidden lg:block md:hidden">
                <div className="px-7 header flex bg-white lg:justify-around md:justify-around justify-start py-[30px] border-b-[2px] border-sky-100 flex-wrap gap-x-4 ">
                  <Link to="/student/home" className="cursor-pointer">
                    <div className="flex items-center instance group">
                      <div className="svg-container">
                        <svg
                          className="text-[#1E293B] group-hover:text-sky-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          width={20}
                          height={20}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div className="pl-3 heading-container">
                        <p className="text-base font-medium leading-none text-slate-800 group-hover:text-sky-700 ">
                          กลับสู่หน้าหลัก
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/student/internship-form"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center instance group">
                      <div className="svg-container">
                        <svg
                          className="text-[#1E293B] group-hover:text-sky-700"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7035 6.5625C15.5891 8.15117 14.4106 9.375 13.1254 9.375C11.8403 9.375 10.6598 8.15156 10.5473 6.5625C10.4301 4.90977 11.5774 3.75 13.1254 3.75C14.6735 3.75 15.8207 4.93984 15.7035 6.5625Z"
                            stroke="Currentcolor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.1248 11.875C10.5791 11.875 8.1311 13.1395 7.51781 15.602C7.43656 15.9277 7.64086 16.25 7.97563 16.25H18.2745C18.6092 16.25 18.8123 15.9277 18.7323 15.602C18.119 13.1 15.6709 11.875 13.1248 11.875Z"
                            stroke="Currentcolor"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M7.81116 7.26328C7.71975 8.53203 6.76741 9.53125 5.74085 9.53125C4.71429 9.53125 3.76038 8.53242 3.67054 7.26328C3.57718 5.94336 4.50413 5 5.74085 5C6.97757 5 7.90452 5.96758 7.81116 7.26328Z"
                            stroke="Currentcolor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.04726 11.9531C7.34218 11.6301 6.56562 11.5059 5.74257 11.5059C3.71132 11.5059 1.75429 12.5156 1.26405 14.4824C1.1996 14.7426 1.36288 15 1.63007 15H6.01601"
                            stroke="Currentcolor"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="pl-3 heading-container">
                        <p className="text-base font-medium leading-none text-slate-800 group-hover:text-sky-700 ">
                          ข้อมูลแบบฟอร์มฝึกประสบการณ์วิชาชีพ
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/student/resume" className="cursor-pointer">
                    <div className="flex items-center instance group">
                      <div className="svg-container">
                        <svg
                          className="text-[#1E293B] group-hover:text-sky-700"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7035 6.5625C15.5891 8.15117 14.4106 9.375 13.1254 9.375C11.8403 9.375 10.6598 8.15156 10.5473 6.5625C10.4301 4.90977 11.5774 3.75 13.1254 3.75C14.6735 3.75 15.8207 4.93984 15.7035 6.5625Z"
                            stroke="Currentcolor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.1248 11.875C10.5791 11.875 8.1311 13.1395 7.51781 15.602C7.43656 15.9277 7.64086 16.25 7.97563 16.25H18.2745C18.6092 16.25 18.8123 15.9277 18.7323 15.602C18.119 13.1 15.6709 11.875 13.1248 11.875Z"
                            stroke="Currentcolor"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M7.81116 7.26328C7.71975 8.53203 6.76741 9.53125 5.74085 9.53125C4.71429 9.53125 3.76038 8.53242 3.67054 7.26328C3.57718 5.94336 4.50413 5 5.74085 5C6.97757 5 7.90452 5.96758 7.81116 7.26328Z"
                            stroke="Currentcolor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.04726 11.9531C7.34218 11.6301 6.56562 11.5059 5.74257 11.5059C3.71132 11.5059 1.75429 12.5156 1.26405 14.4824C1.1996 14.7426 1.36288 15 1.63007 15H6.01601"
                            stroke="Currentcolor"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="pl-3 heading-container">
                        <p className="text-base font-medium leading-none text-slate-800 group-hover:text-sky-700 ">
                          ข้อมูลแบบฟอร์มประวัติส่วนตัว
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link to="/" className="cursor-pointer" onClick={handleLogout}>
                    <div className="flex items-center instance group">
                      <div className="svg-container">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#1E293B] group-hover:text-sky-700"
                          width={20}
                          height={20}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </div>
                      <div className="pl-3 heading-container">
                        <p className="text-base font-medium leading-none text-slate-800 group-hover:text-sky-700 ">
                          ออกจากระบบ
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controllers;
