import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Resumehook from "../hook/ResumeHook";
import { useDispatch } from "react-redux";
import { loadState } from "../../helpers/Persist";
import { loadResume } from "../../redux/actions/student/resume";

const Index = () => {
  const dispatch = useDispatch();
  const {
    showDropDownMenuProgram,
    swaptextProgram,

    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    birthDate,
    setBirthDate,
    email,
    setEmail,

    idCard,
    setIdCard,
    religion,
    setReligion,
    fatherName,
    setFatherName,
    fatherJob,
    setFatherJob,
    motherName,
    setMotherName,
    motherJob,
    setMotherJob,
    program,
    setProgram,

    interest,
    setInterest,
    skill,
    setSkill,
    exp,
    setExp,
    presentGpa,
    setPresentGpa,
    projectTopic,
    setProjectTopic,

    hometownHouseNumber,
    hometownRoad,

    hometownSubDistrict,
    hometownDistrict,
    hometownProvince,
    hometownPostCode,

    setHometownHouseNumber,
    setHometownRoad,

    setHometownSubDistrict,
    setHometownDistrict,
    setHometownProvince,

    setHometownPostCode,

    presentHouseNumber,
    presentRoad,

    presentSubDistrict,
    presentDistrict,
    presentProvince,
    presentPostCode,

    setPresentHouseNumber,
    setPresentRoad,
    setPresentSubDistrict,
    setPresentDistrict,
    setPresentProvince,
    setPresentPostCode,

    handleEducation1FormChange,
    handleEducation2FormChange,
    handleEducation3FormChange,
    handleFormSave,

    SelectProgram,
    educationData1,
    setEducationData1,
    educationData2,
    setEducationData2,
    educationData3,
    setEducationData3,

    showDropDownMenuHometownProvinces,
    swaptextHometownProvinces,
    showDropDownMenuHometownDistricts,
    swaptextHometownDistricts,
    showDropDownMenuHometownSubDistricts,
    swaptextHometownSubDistricts,

    provinces,
    districts,
    subDistricts,

    fetchProvinces,
  } = Resumehook();

  useEffect(() => {
    dispatch(loadResume);
  }, [dispatch]);

  useEffect(() => {
    // const intern = loadState("internship");
    const resume = loadState("resume");
    const resumeData = resume?.student;
    const hometownData = resume?.HometownAddress;
    const presentData = resume?.PresentAddress;

    // private student data
    setIdCard(resumeData?.id_card);
    setFirstName(resumeData?.first_name);
    setLastName(resumeData?.last_name);
    setReligion(resumeData?.religion);
    setFatherName(resumeData?.father_name);
    setFatherJob(resumeData?.father_job);
    setMotherName(resumeData?.mother_name);
    setMotherJob(resumeData?.mother_job);
    setPhone(resumeData?.phone);
    setInterest(resumeData?.interest);
    setSkill(resumeData?.skill);
    setExp(resumeData?.exp);
    setEmail(resumeData?.email);
    setProgram(resumeData?.program);
    setPresentGpa(resumeData?.present_gpa);
    setProjectTopic(resumeData?.project_topic);
    const dateData = resumeData?.dob;
    setBirthDate(new Date(dateData));

    // hometown data
    setHometownHouseNumber(hometownData?.house_number);
    setHometownRoad(hometownData?.road);
    setHometownSubDistrict(hometownData?.sub_district);
    setHometownDistrict(hometownData?.district);
    setHometownProvince(hometownData?.province);
    setHometownPostCode(hometownData?.post_code);

    setPresentHouseNumber(presentData?.house_number);
    setPresentRoad(presentData?.road);
    setPresentSubDistrict(presentData?.sub_district);
    setPresentDistrict(presentData?.district);
    setPresentProvince(presentData?.province);
    setPresentPostCode(presentData?.post_code);

    setEducationData1(resume?.education[0]);
    setEducationData2(resume?.education[1]);
    setEducationData3(resume?.education[2]);
    fetchProvinces();
  }, []);

  const privateData = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        1. ข้อมูลส่วนตัว
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อ"
            defaultValue={firstName}
            maxLength={150}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อ-นามสุกล"
            defaultValue={lastName}
            maxLength={150}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            email
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="exsample@gmail.com"
            type="email"
            id="email"
            required
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {SelectProgram}
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสประจำตัวประชาชน
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสประจำตัวประชาชน"
            defaultValue={idCard}
            maxLength={11}
            onChange={(e) => {
              setIdCard(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            วันเดือนปีเกิด
          </p>
          <DatePicker
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="Select date"
            selected={birthDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setBirthDate(date)}
          />
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ศาสนา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ศาสนา"
            defaultValue={religion}
            onChange={(e) => {
              setReligion(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อบิดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อบิดา"
            defaultValue={fatherName}
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อาชีพบิดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อาชีพบิดา"
            defaultValue={fatherJob}
            onChange={(e) => {
              setFatherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อมารดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อมารดา"
            defaultValue={motherName}
            onChange={(e) => {
              setMotherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อาชีพมารดา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อาชีพมารดา"
            defaultValue={motherJob}
            onChange={(e) => {
              setMotherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            โทร
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="โทร"
            defaultValue={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  const SelectHometownAddresses = (
    <>
      {/* // ======================== Addresses API  ======================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-7 mt-3 ">
        {/* ===================== Provinces Selection ===================== */}
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuHometownProvinces}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-hometown-provinces-setter"
                >
                  {hometownProvince == "" ? (
                    <> - กรุณาเลือกจังหวัด - </>
                  ) : (
                    hometownProvince
                  )}
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
                id="drop-down-div-hometown-provinces"
              >
                {provinces?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextHometownProvinces}
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

        {/* ===================== districts Selection ===================== */}
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuHometownDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-hometown-districts-setter"
                >
                  {hometownDistrict == "" ? (
                    <> - กรุณาเลือกอำเภอ -</>
                  ) : (
                    hometownDistrict
                  )}
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
                id="drop-down-div-hometown-districts"
              >
                {districts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextHometownDistricts}
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

        {/* ===================== sub districts Selection ===================== */}
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuHometownSubDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-hometown-subdistricts-setter"
                >
                  {hometownSubDistrict == "" ? (
                    <> - กรุณาเลือกตำบล - </>
                  ) : (
                    hometownSubDistrict
                  )}
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
                id="drop-down-div-hometown-subdistricts"
              >
                {subDistricts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextHometownSubDistricts}
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
      {/* // ======================== Addresses API  ======================== */}
    </>
  );

  const hometownDataSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        2. ภูมิลำเนาเดิม
      </p>
      {SelectHometownAddresses}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
      <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={hometownPostCode}
            onChange={(e) => {
              setHometownPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
       
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={hometownRoad}
            onChange={(e) => {
              setHometownRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={hometownHouseNumber}
            onChange={(e) => {
              setHometownHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>

      </div>

      {/* <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={hometownDistrict}
            onChange={(e) => {
              setHometownDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={hometownProvince}
            onChange={(e) => {
              setHometownProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={hometownPostCode}
            onChange={(e) => {
              setHometownPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div> */}
    </div>
  );
  const presentDataSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        3. ที่อยู่ปัจจุบัน
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentRoad}
            onChange={(e) => {
              setPresentRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล / แขวง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentSubDistrict}
            onChange={(e) => {
              setPresentSubDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={presentDistrict}
            onChange={(e) => {
              setPresentDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={presentProvince}
            onChange={(e) => {
              setPresentProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  const educationSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        4. ประวัติการศึกษา
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData1?.academy}
            onChange={handleEducation1FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData1?.gpa}
            onChange={handleEducation1FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData2?.level}
            onChange={handleEducation2FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData2?.academy}
            onChange={handleEducation2FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData2?.gpa}
            onChange={handleEducation2FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ระดับการศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData3?.level}
            onChange={handleEducation3FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อสถานศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ชื่อสถานศึกษา"
            defaultValue={educationData3?.academy}
            onChange={handleEducation3FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            เกรดเฉลี่ย
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={educationData3?.gpa}
            onChange={handleEducation3FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const experienceSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        5 ประสบการณ์ทำงาน
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ข้อมูลการทำงาน ประสบการณ์ทำงาน
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={exp}
            onChange={(e) => {
              setExp(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  const gpaSection = (
    <div className="mt-10 px-7">
      <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ปัจจุบันศึกษาชั้นปีที่ 4 เกรดเฉลี่ยปัจจุบัน
          </p>
          <input
            className="w-24 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentGpa}
            onChange={(e) => {
              setPresentGpa(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            หัวข้อโครงงานวิทยาการคอมพิวเตอร์ / โครงงานเทคโนโลยีสารสนเทศเรื่อง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={projectTopic}
            onChange={(e) => {
              setProjectTopic(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const skillSection = (
    <div className="mt-10 px-7">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7 ">
        <p className="text-lg font-semibold leading-tight text-gray-800">
          6. ความสามารถพิเศษ
        </p>
        <p className="text-lg font-semibold leading-tight text-gray-800 sm0:hidden  md:grid">
          7. ความสนใจพิเศษในด้านการขอรับการฝึกงานจากหน่วยงาน
        </p>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ความสามารถพิเศษ
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ความสามารถพิเศษ"
            defaultValue={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <p className="text-lg font-semibold leading-tight text-gray-800 lg:hidden md:hidden">
          7. ความสนใจพิเศษในด้านการขอรับการฝึกงานจากหน่วยงาน
        </p>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ความสนใจพิเศษในด้านการขอรับการฝึกงานจากหน่วยงาน
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={interest}
            onChange={(e) => {
              setInterest(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const interestSection = <div className="mt-10 px-7"></div>;

  const contactPersonSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        8. บุคคลที่สามารถติดต่อได้
      </p>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ชื่อ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            นามสกุล
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ความสัมพันธุ์กับนักศึกษา
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            บ้านเลขที่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="บ้านเลขที่"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ถนน / ซอย / หมู่
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentRoad}
            onChange={(e) => {
              setPresentRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ตำบล / แขวง
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="ถนน / ซอย / หมู่"
            defaultValue={presentSubDistrict}
            onChange={(e) => {
              setPresentSubDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            อำเภอ
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="อำเภอ"
            defaultValue={presentDistrict}
            onChange={(e) => {
              setPresentDistrict(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            จังหวัด
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="จังหวัด"
            defaultValue={presentProvince}
            onChange={(e) => {
              setPresentProvince(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            รหัสไปรษณีย์
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="รหัสไปรษณีย์"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            โทร
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            placeholder="โทร"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="2xl:px-56 xl:px-48 lg:px-36">
        <div className="flex flex-no-wrap items-center">
          <div className="w-full ">
            <div className="py-4 px-2">
              <form onSubmit={(e) => handleFormSave(e)}>
                <div className="bg-white rounded shadow mt-7 py-7">
                  {/* end */}
                  {/* ข้อมูลส่วนตัว */}
                  {privateData}
                  {/* ภูมิลำเนา */}
                  {hometownDataSection}
                  {/* ที่อยู่ปัจจุบัน */}
                  {presentDataSection}
                  {/* ประวัติการศึกษา */}
                  {educationSection}
                  {/* ประสบการณ์การทำงาน */}
                  {experienceSection}
                  {/* ข้อมูลผลการเรียน */}
                  {gpaSection}
                  {/* ความสามารถพิเศษ */}
                  {skillSection}
                  {/* ความสนใจ */}
                  {interestSection}
                  {/* บุคคลที่สามารถติดต่อได้ */}
                  {contactPersonSection}

                  <hr className="h-[1px] bg-gray-100 my-14" />
                  <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                    <button className="btn btn-cancel rounded transform duration-300 ease-in-out text-sm font-medium px-6 py-4 border lg:max-w-[95px]  w-full ">
                      Cancel
                    </button>

                    <button
                      // onClick={(e) => {
                      //   handleFormSave(e);
                      // }}
                      id="submit"
                      type="submit"
                      className="btn btn-sky transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full "
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
