import React, { forwardRef, useState, useEffect } from "react";
import * as thaiAddresses from "../../services/api/thaiAddresses/thaiAddressApi";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function OptionTest() {
  // ======================== Addresses API  ========================
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);
  const [subDistrictData, setSubDistrictData] = useState([]);
  const fetchProvinces = async () => {
    const resp = await thaiAddresses.getAllProvinces();
    setProvinces(resp.data);
  };
  const fetchDistricts = async (provinceId) => {
    const resp = await thaiAddresses.getDistricts(provinceId);
    setDistricts(resp.data);
  };
  const fetchSubDistricts = async (districtId) => {
    const resp = await thaiAddresses.getSubDistricts(districtId);
    setSubDistricts(resp.data);
  };
  const fetchSubDistrictData = async (subDistrictId) => {
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    setSubDistrictData(resp.data);
  };

  // -------- Provinces --------
  const showDropDownMenuProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    fetchDistricts(provinceId);
    document.getElementById("drop-down-provinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-provinces")
      .classList.toggle("hidden");
  };
  // -------- Districts --------
  const showDropDownMenuDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextDistricts = (el) => {
    const targetText = el.target.innerText;
    const districtId = Object.values(el.target)[0].key;
    fetchSubDistricts(districtId);
    document.getElementById("drop-down-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-districts")
      .classList.toggle("hidden");
  };
  // -------- Sub districts --------
  const showDropDownMenuSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextSubDistricts = (el) => {
    const targetText = el.target.innerText;
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData(subDistrictId);
    document.getElementById("drop-down-subdistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-subdistricts")
      .classList.toggle("hidden");
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  const Addresses = (
    <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-7 mt-3 ">
      {/* ===================== Provinces Selection ===================== */}
      <div>
        <p className="text-base font-medium leading-none text-gray-800">
          จังหวัด
        </p>
        {/*-Dropdown*/}
        <div className="relative top-1 ">
          <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
            <div
              onClick={showDropDownMenuProvinces}
              className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
            >
              <span
                className="pr-4 text-sm font-medium text-gray-600"
                id="drop-down-provinces-setter"
              >
                "- กรุณาเลือกจังหวัด -"
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
              id="drop-down-div-provinces"
            >
              {provinces?.map((item) => {
                {
                  return (
                    <p
                      key={item.id}
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptextProvinces}
                    >
                      {item.name_th}
                    </p>
                  );
                }
              })}
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
      {/* ===================== Provinces Selection ===================== */}

      {/* ===================== districts Selection ===================== */}
      <div>
        <p className="text-base font-medium leading-none text-gray-800">
          อำเภอ
        </p>
        {/*-Dropdown*/}
        <div className="relative top-1 ">
          <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
            <div
              onClick={showDropDownMenuDistricts}
              className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
            >
              <span
                className="pr-4 text-sm font-medium text-gray-600"
                id="drop-down-districts-setter"
              >
                "- กรุณาเลือกอำเภอ -"
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
              id="drop-down-div-districts"
            >
              {districts?.map((item) => {
                {
                  return (
                    <p
                      key={item.id}
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptextDistricts}
                    >
                      {item.name_th}
                    </p>
                  );
                }
              })}
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
      {/* ===================== district Selection ===================== */}
      {/* ===================== sub districts Selection ===================== */}
      <div>
        <p className="text-base font-medium leading-none text-gray-800">ตำบล</p>
        {/*-Dropdown*/}
        <div className="relative top-1 ">
          <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
            <div
              onClick={showDropDownMenuSubDistricts}
              className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
            >
              <span
                className="pr-4 text-sm font-medium text-gray-600"
                id="drop-down-subdistricts-setter"
              >
                "- กรุณาเลือกตำบล -"
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
              id="drop-down-div-subdistricts"
            >
              {subDistricts?.map((item) => {
                {
                  return (
                    <p
                      key={item.id}
                      className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptextSubDistricts}
                    >
                      {item.name_th}
                    </p>
                  );
                }
              })}
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
      {/* ===================== district Selection ===================== */}
    </div>
    // ======================== Addresses API  ========================
  );

  const [startDate, setStartDate] = useState(new Date());

  // ======================== Addresses API  ========================
  return (
    <>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DatePicker
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
          placeholder="Select date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </>
  );
}

export default OptionTest;
