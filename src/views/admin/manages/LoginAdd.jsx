import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState, saveState } from "../../../helpers/Persist";
import { createLogin } from "../../../redux/actions/admin/login";

const LoginAdd = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("student");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [program, setProgram] = useState("");
  const [department, setDepartment] = useState("");

  const [phone, setPhone] = useState("");

  function showDropDownMenu(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext(el) {
    const targetText = el.target.innerText;
    if (targetText === "ผู้ดูแลระบบ") {
      setRoles("admin");
    } else if (targetText === "คณะกรรมการ") {
      setRoles("director");
    } else {
      setRoles("student");
    }
    document.getElementById("drop-down-content-setter").innerText = targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");
  }
  const handleSave = (e) => {
    e.preventDefault();
    let saveValues;
    if (roles === "admin") {
      saveValues = { login: { username, password, roles } };
    }
    if (roles === "director") {
      saveValues = {
        login: { username, password, roles },
        director: {
          first_name: firstName,
          last_name: lastName,
          phone,
          program,
          department,
        },
      };
    }
    if (roles === "student") {
      saveValues = {
        login: { username, password, roles },
        student: {
          first_name: firstName,
          last_name: lastName,
          program,
          phone,
        },
      };
    }
    dispatch(createLogin(saveValues));
  };
  return (
    <form
      onSubmit={(e) => {
        handleSave(e);
      }}
      className="wrapper"
    >
      <div className="bg-white rounded shadow mt-7 py-7">
        <div className="mt-10 px-7">
          <p className="text-xl font-semibold leading-tight text-gray-800">
            เพิ่มสมาชิก
          </p>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Username
              </p>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
              <p className="mt-3 text-xs leading-3 text-gray-600">
                รหัสนักศึกษา
              </p>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Password
              </p>
              <input
                required
                maxLength={50}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
              <p className="mt-3 text-xs leading-[15px] text-gray-600">
                รหัสผ่าน
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                สถานะ
              </p>
              {/*-Dropdown*/}
              <div className="relative top-1 ">
                <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
                  <div
                    onClick={showDropDownMenu}
                    className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
                  >
                    <span
                      className="pr-4 text-sm font-medium text-gray-600"
                      id="drop-down-content-setter"
                    >
                      นักศึกษา
                    </span>
                    <svg
                      id="rotate"
                      className="absolute z-10 cursor-pointer right-5"
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 0.75L5 5.25L9.5 0.75"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className="overflow-y-auto h-52 absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
                    id="drop-down-div"
                  >
                    <p
                      id="student"
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext}
                    >
                      นักศึกษา
                    </p>

                    <p
                      id="director"
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext}
                    >
                      คณะกรรมการ
                    </p>
                    <p
                      id="admin"
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext}
                    >
                      ผู้ดูแลระบบ
                    </p>
                  </div>
                </div>
                {/* end */}
              </div>
              {/* end */}
            </div>
          </div>
          {roles === "student" ? (
            <>
              <div className="mt-10">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  กรอกข้อมูลเพิ่มเติมสำหรับนักศึกษา
                </p>
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      ชื่อ
                    </p>
                    <input
                      maxLength={150}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-3 text-gray-600">
                      first name
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      นามสกุล
                    </p>
                    <input
                      maxLength={150}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                      last name
                    </p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      สาขา
                    </p>
                    <input
                      maxLength={50}
                      onChange={(e) => {
                        setProgram(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-3 text-gray-600">
                      fild of study
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      เบอร์โทร
                    </p>
                    <input
                      maxLength={10}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                      phone
                    </p>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <></>
          )}

          {roles === "director" ? (
            <>
              <div className="mt-10">
                <p className="text-xl font-semibold leading-tight text-gray-800">
                  กรอกข้อมูลเพิ่มเติมสำหรับ คณะกรรมการ
                </p>
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      ชื่อ
                    </p>
                    <input
                      maxLength={150}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-3 text-gray-600">
                      first name
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      นามสกุล
                    </p>
                    <input
                      maxLength={150}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                      last name
                    </p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      สาขา
                    </p>
                    <input
                      maxLength={50}
                      onChange={(e) => {
                        setProgram(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-3 text-gray-600">
                      fild of study
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      คณะ
                    </p>
                    <input
                      maxLength={50}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                      department
                    </p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      เบอร์โทร
                    </p>
                    <input
                      maxLength={10}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                    />
                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                      phone number
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <hr className="h-[1px] bg-gray-100 my-14" />
        <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
          <Link to="/admin/manage/login">
            <button className="bg-white border-sky-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-sky-700 border lg:max-w-[95px]  w-full ">
              ยกเลิก
            </button>
          </Link>

          <button
            type="submit"
            className="bg-sky-700 rounded hover:bg-sky-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
          >
            เพิ่มสมาชิก
          </button>
        </div>
        <Outlet />
      </div>
    </form>
  );
};

export default LoginAdd;
