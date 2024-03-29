import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import {
  updateLogin,
  loadLoginAccount,
} from "../../../redux/actions/admin/login";
import { useParams } from "react-router-dom";
import { getLoginAccount } from "../../../redux/selectors/admin/login";
import { loadStudentProfile } from "../../../redux/actions/admin/profile";
import { loadState, saveState } from "../../../helpers/Persist";

const LoginUpdate = () => {
  const dispatch = useDispatch();
  const loginAccount = useSelector(getLoginAccount);
  let { id, role } = useParams();

  const [accountRoles, setAccountRoles] = useState("");
  const [username, setUsername] = useState(loginAccount?.resp?.username);
  const [password, setPassword] = useState(loginAccount?.resp?.password);

  const [firstName, setFirstName] = useState(loginAccount?.data?.first_name);
  const [lastName, setLastName] = useState(loginAccount?.data?.last_name);
  const [program, setProgram] = useState(loginAccount?.data?.program);
  const [department, setDepartment] = useState(loginAccount?.data?.department);
  const [phone, setPhone] = useState(loginAccount?.data?.phone);

  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();
  const handleSave = (e) => {
    e.preventDefault();
    let saveValues;
    let isActive;
    if (enabled == true) {
      isActive = 1;
    } else {
      isActive = 0;
    }
    if (loginAccount?.resp?.roles === "admin") {
      saveValues = {
        id,
        login: { username, password, roles: role, is_active: isActive },
      };
    }
    if (loginAccount?.resp?.roles === "director") {
      saveValues = {
        id,
        login: { username, password, roles: role, is_active: isActive },
        director: {
          first_name: firstName,
          last_name: lastName,
          phone,
          program,
          department,
        },
      };
    }
    if (loginAccount?.resp?.roles === "student") {
      console.log("student", isActive);
      saveValues = {
        id,
        login: { username, password, roles: role, is_active: isActive },
        student: {
          first_name: firstName,
          last_name: lastName,
          program,
          phone,
        },
      };
    }
    dispatch(updateLogin(saveValues));
    navigate("/admin/manage/login");
  };

  const handleSetEnableToggle = () => {
    let state = loadState("status-user");
    if (state === 1) {
      setEnabled(false);
      saveState("status-user", 0);
    } else {
      setEnabled(true);
      saveState("status-user", 1);
    }
  };
  useEffect(() => {
    let state = loadState("status-user");
    if (state === 1) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (role === "student") {
      setAccountRoles("นักศึกษา");
      dispatch(loadStudentProfile(id));
    }
    if (role === "director") {
      setAccountRoles("คณะกรรมการฝึกประสบการณ์");
    }
    if (role === "admin") {
      setAccountRoles("ผู้ดูแลระบบ");
    }

    dispatch(loadLoginAccount(id));
  }, [dispatch]);

  return (
    <div className="2xl:px-56 xl:px-48 lg:px-36 mb-32 mt-10">
      <div className="flex flex-no-wrap items-center">
        <div className="w-full ">
          <div className="py-4 px-2">
            <Link to="/admin/manage/login">
              <button className="items-end w-32 text-white btn btn-sky">
                กลับ
              </button>
            </Link>
            {loginAccount?.resp?.roles === "student" ? (
              <>
                <Link to={`/admin/manage/login/update/student/profile/${id}`}>
                  {" "}
                  <button className="items-end w-26 text-white btn btn-sky">
                    แก้ไขข้อมูลประวัตินักศึกษา
                  </button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
          <form
            onSubmit={(e) => {
              handleSave(e);
            }}
            className=""
          >
            <div className="bg-white rounded shadow mt-7 py-7">
              <div className="mt-2 px-7">
                <p className="text-lg font-semibold leading-tight text-gray-800">
                  เแก้ไขข้อมูลสมาชิก
                </p>
                <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800">
                      Username
                    </p>
                    <input
                      defaultValue={loginAccount?.resp?.username}
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
                      defaultValue={loginAccount?.resp?.password}
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
                    <div className="p-2 mt-2">
                      <Switch
                        checked={enabled}
                        onChange={handleSetEnableToggle}
                        className={`${
                          enabled ? "bg-blue-600" : "bg-gray-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            enabled ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white `}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
                {loginAccount && loginAccount?.resp?.roles === "student" ? (
                  <>
                    <div className="mt-10">
                      <p className="text-lg font-semibold leading-tight text-gray-800">
                        กรอกข้อมูลเพิ่มเติมสำหรับนักศึกษา
                      </p>
                      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                        <div>
                          <p className="text-base font-medium leading-none text-gray-800">
                            ชื่อ
                          </p>
                          <input
                            defaultValue={loginAccount?.data?.first_name}
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
                            defaultValue={loginAccount?.data?.last_name}
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
                            defaultValue={loginAccount?.data?.program}
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
                            defaultValue={loginAccount?.data?.phone}
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

                {loginAccount && loginAccount?.resp?.roles === "director" ? (
                  <>
                    <div className="mt-10">
                      <p className="text-lg font-semibold leading-tight text-gray-800">
                        กรอกข้อมูลเพิ่มเติมสำหรับ คณะกรรมการ
                      </p>
                      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                        <div>
                          <p className="text-base font-medium leading-none text-gray-800">
                            ชื่อ
                          </p>
                          <input
                            defaultValue={loginAccount?.data?.first_name}
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
                            defaultValue={loginAccount?.data?.last_name}
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
                            defaultValue={loginAccount?.data?.program}
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
                            defaultValue={loginAccount?.data?.department}
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
                            defaultValue={loginAccount?.data?.phone}
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
                  className="bg-sky-400 rounded hover:bg-sky-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                >
                  แก้ไขข้อมูลผู้ใช้
                </button>
              </div>
            </div>
          </form>
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginUpdate;
