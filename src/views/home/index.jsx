import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector, useState } from "react-redux";
import { getUsers } from "../../application/selectors/users";
import { loadUsers } from "../../application/actions/users";

import { pageLoaded } from "../../application/actions/ui";
import { getLoading } from "../../application/selectors/ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { loadState, removeState } from "../../helpers/Persist";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUsers);
  useEffect(()=>{
    const islogin = loadState('login');
    if(islogin){
      toast.success('🦄 ลงชื่อเข้าใช้สำเร็จ... ยินดีต้อนรับ !', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      removeState('login')
    }
  },[])
  useEffect(() => {
    dispatch(loadUsers);
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <Layout>
      <div className="wrapper bg-gray-200 antialiased ">
        <div className="flex md:flex-row sm0:flex-col sm1:flex-col sm3:flex-row sm3:space-x-10 md:space-x-5 lg:flex-row lg:space-x-16 items-center justify-center min-h-screen">
          <div className="w-64 px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
            <div className="flex justify-center items-center mb-3 mt-3">
              <FontAwesomeIcon
                className="fill-current h-16 w-16"
                icon={faUser}
              />
            </div>
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

          <div className="w-64 px-8 py-6 mt-4 text-left bg-white shadow-2xl rounded-3xl">
            <div className="flex justify-center items-center mb-3 mt-3">
              <FontAwesomeIcon
                className="fill-current h-16 w-16"
                icon={faEdit}
              />
              <i class="fas fa-file-user"></i>
            </div>
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
      </div>
    </Layout>
  );
};

export default Home;
