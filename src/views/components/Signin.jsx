import React from "react";
import Layout from "./Layout";

const Signin = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
          <h3 className="text-2xl font-bold text-center">
            เข้าสู่ระบบ
          </h3>
          <form action>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  รหัสนักศึกษา
                  <label>
                    <input
                      type="text"
                      placeholder="รหัสนักศึกษา / Username"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                    />
                  </label>
                </label>
              </div>
              <div className="flex justify-center items-center mb-3 mt-3">
                <button className="px-6 py-2 mt-4 text-white bg-sky-500 rounded-lg hover:bg-sky-800">
                  เข้าสู่ระบบ
                </button>
				
                {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
