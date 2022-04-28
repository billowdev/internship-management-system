import React from "react";
import { Outlet } from "react-router-dom";

const InternshipsViews = () => {
  return (
    <div className="bg-white rounded shadow mt-7 py-7">
      <div className="mt-10 px-7">
        <p className="text-xl font-semibold leading-tight text-gray-800">
          Meta Details
        </p>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Meta Title
            </p>
            <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
            <p className="mt-3 text-xs leading-3 text-gray-600">
              Set a simple and precise meta title
            </p>
          </div>
          <div>
            <p className="text-base font-medium leading-none text-gray-800">
              Meta Keywords
            </p>
            <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
            <p className="mt-3 text-xs leading-[15px] text-gray-600">
              Set words that are related to the product
            </p>
          </div>
        </div>
      </div>

      <hr className="h-[1px] bg-gray-100 my-14" />
      <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
        <button className="bg-white border-sky-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-sky-700 border lg:max-w-[95px]  w-full ">
          ยกเลิก
        </button>
        <button className="bg-sky-700 rounded hover:bg-sky-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
          แก้ไขข้อมูล
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default InternshipsViews;
