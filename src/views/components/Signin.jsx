import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadAuth, loadSignin } from "../../application/actions/auth";
import { loginApi } from "../../services/api/auth/login";

const Signin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();
  const errRef = useRef();
  const handleLogin = async (e) => {
    // dispatch(loadSignin({ username, password }));
    try {
      const response = await loginApi({ username, password });
      setUsername("");
      setPassword("");
      navigate(from, { replace: true });
      toast.success("ยินดีต้อนรับ !", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     
      // dispatch(loadAuth);
      window.location.reload();
    } catch (err) {
     if (err.response?.status === 400) {
        toast.error("ลงชื่อเข้าใช้ผิดพลาด กรุณาลองใหม่อีกครั้ง!", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h3 className="text-2xl font-bold text-center">เข้าสู่ระบบ</h3>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                รหัสนักศึกษา
                <label>
                  <input
                    type="text"
                    ref={userRef}
                    placeholder="รหัสนักศึกษา / Username"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    value={username}
                    minLength={11}
                    maxLength={11}
                    required
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Password
                <label>
                  <input
                    type="password"
                    placeholder=" รหัสผ่าน / password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                    minLength={8}
                    maxLength={50}
                  />
                </label>
              </label>
            </div>
            <div className="flex justify-center items-center mb-3 mt-3">
              <button
                onClick={() => handleLogin()}
                className="px-6 py-2 mt-4 text-white bg-sky-500 rounded-lg hover:bg-sky-800"
              >
                เข้าสู่ระบบ
              </button>

              {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
