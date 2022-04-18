import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector, useState } from "react-redux";
import { getUsers } from "../../application/selectors/users";
import { loadUsers } from "../../application/actions/users";

import { pageLoaded } from "../../application/actions/ui";
import { getLoading } from "../../application/selectors/ui";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUsers);
  useEffect(() => {
    dispatch(loadUsers);
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 space-x-24">
        <div className="w-64 px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
          <h3 className="text-2xl font-bold text-center">การฝึกงาน</h3>
          <div className="mt-4">
            <div className="flex justify-center items-center mb-3 mt-3">
              <button className="w-32 px-6 py-2 mt-4 text-white btn btn-green">
                ส่งแล้ว
              </button>
            </div>
            <div className="flex justify-center items-center mb-3 mt-3">
              <button className="w-32 px-6 py-2  text-white btn btn-sky">
                ดู
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
          <h3 className="text-2xl font-bold text-center">ประวัตินักศึกษา</h3>
          <div className="mt-4">
            <div className="flex justify-center items-center mb-3 mt-3">
              <button className="w-32 px-6 py-2 mt-4 text-white btn btn-red">
                ยังไม่ส่ง
              </button>
            </div>
            <div className="flex justify-center items-center mb-3 mt-3">
              <button className="w-32 px-6 py-2  text-white btn btn-sky">
                ดู
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
