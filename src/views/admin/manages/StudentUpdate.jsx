import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import StudentUpdateHook from "./StudentUpdateHook";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { loadState } from "../../../helpers/Persist";
import { loadStudentProfile } from "../../../redux/actions/admin/profile";


const StudentUpdate = () => {
  
  const {
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
    setStudentId,

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

    setContactPersonPhone,
    setContactPersonFirstName,
    setContactPersonLastName,
    setContactPersonRelationship,
    setContactPersonHouseNumber,
    setContactPersonRoad,
    setContactPersonSubDistrict,
    setContactPersonDistrict,
    setContactPersonProvince,
    setContactPersonPostCode,

    contactPersonFirstName,
    contactPersonLastName,

    contactPersonHouseNumber,
    contactPersonRoad,
    contactPersonSubDistrict,
    contactPersonDistrict,
    contactPersonProvince,
    contactPersonPostCode,

    contactPersonPhone,
    contactPersonRelationship,

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

    showDropDownMenuPresentProvinces,
    swaptextPresentProvinces,
    showDropDownMenuPresentDistricts,
    swaptextPresentDistricts,
    showDropDownMenuPresentSubDistricts,
    swaptextPresentSubDistricts,

    provinces,
    districts,
    subDistricts,

    presentProvinces,
    presentDistricts,
    presentSubDistricts,

    showDropDownMenuContactPersonProvinces,
    swaptextContactPersonProvinces,
    showDropDownMenuContactPersonDistricts,
    swaptextContactPersonDistricts,
    showDropDownMenuContactPersonSubDistricts,
    swaptextContactPersonSubDistricts,
    // list province district sub-district from api
    contactPersonProvinces,
    contactPersonDistricts,
    contactPersonSubDistricts,

    showDropDownMenuProgram,
    swaptextProgram,

    fetchProvinces,

    handleFileInputChange,
    fileInputState,
    PreviewSource,
  } = StudentUpdateHook();

  const { id, role } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentProfile(id));
  }, [dispatch]);

  const [studentProfile, setStudentProfile] = useState(
    loadState("student-profile")
  );

  const imageProfile = `/images/${studentProfile?.student?.image_name}`;
  const imageNotFound = `/images/student_picture.png`;

  const setStateResue = () => {
    // const studentProfile = loadState("studentProfile");
    setContactPersonFirstName(
      studentProfile?.contactPersonData?.contactPerson?.first_name
    );
    setContactPersonLastName(
      studentProfile?.contactPersonData?.contactPerson?.last_name
    );
    setContactPersonRelationship(
      studentProfile?.contactPersonData?.contactPerson?.relationship
    );

    setContactPersonPhone(
      studentProfile?.contactPersonData?.contactPersonAddress?.phone
    );
    setContactPersonHouseNumber(
      studentProfile?.contactPersonData?.contactPersonAddress?.house_number
    );
    setContactPersonRoad(
      studentProfile?.contactPersonData?.contactPersonAddress?.road
    );
    setContactPersonSubDistrict(
      studentProfile?.contactPersonData?.contactPersonAddress?.sub_district
    );
    setContactPersonDistrict(
      studentProfile?.contactPersonData?.contactPersonAddress?.district
    );
    setContactPersonProvince(
      studentProfile?.contactPersonData?.contactPersonAddress?.province
    );
    setContactPersonPostCode(
      studentProfile?.contactPersonData?.contactPersonAddress?.post_code
    );

    // private student data
    setIdCard(studentProfile?.student?.id_card);
    setFirstName(studentProfile?.student?.first_name);
    setLastName(studentProfile?.student?.last_name);
    setReligion(studentProfile?.student?.religion);
    setFatherName(studentProfile?.student?.father_name);
    setFatherJob(studentProfile?.student?.father_job);
    setMotherName(studentProfile?.student?.mother_name);
    setMotherJob(studentProfile?.student?.mother_job);
    setPhone(studentProfile?.student?.phone);
    setInterest(studentProfile?.student?.interest);
    setSkill(studentProfile?.student?.skill);
    setExp(studentProfile?.student?.exp);
    setEmail(studentProfile?.student?.email);
    setProgram(studentProfile?.student?.program);
    setPresentGpa(studentProfile?.student?.present_gpa);
    setProjectTopic(studentProfile?.student?.project_topic);
    setBirthDate(new Date(studentProfile?.student?.dob));

    // hometown data
    setHometownHouseNumber(studentProfile?.HometownAddress?.house_number);
    setHometownRoad(studentProfile?.HometownAddress?.road);
    setHometownSubDistrict(studentProfile?.HometownAddress?.sub_district);
    setHometownDistrict(studentProfile?.HometownAddress?.district);
    setHometownProvince(studentProfile?.HometownAddress?.province);
    setHometownPostCode(studentProfile?.HometownAddress?.post_code);

    setPresentHouseNumber(studentProfile?.PresentAddress?.house_number);
    setPresentRoad(studentProfile?.PresentAddress?.road);
    setPresentSubDistrict(studentProfile?.PresentAddress?.sub_district);
    setPresentDistrict(studentProfile?.PresentAddress?.district);
    setPresentProvince(studentProfile?.PresentAddress?.province);
    setPresentPostCode(studentProfile?.PresentAddress?.post_code);

    setEducationData1(studentProfile?.education[0]);
    setEducationData2(studentProfile?.education[1]);
    setEducationData3(studentProfile?.education[2]);

    setStudentId(id);
    fetchProvinces();
  };

  useEffect(() => {
    setStudentProfile(loadState("student-profile"));
    setStateResue();
    fetchProvinces();
  }, []);

  // ==================== student section =========================
  const SelectProgram = (
    <>
      {" "}
      <div>
        <p className="text-base font-medium leading-none text-gray-800">
          ????????????????????????
        </p>
        {/*-Dropdown*/}
        <div className="relative top-1 ">
          <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
            <div
              onClick={showDropDownMenuProgram}
              id="program"
              className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
            >
              <span
                className="pr-4 text-sm font-medium text-gray-600"
                id="drop-down-content-setter-program"
              >
                {program == "" ? "?????????????????????????????????????????????????????????" : program}
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
              className="absolute z-20 right-0 hidden w-full px-1 py-2 bg-white border-t border-gray-200 rounded shadow top-12"
              id="drop-down-div-program"
            >
              <p
                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                onClick={swaptextProgram}
              >
                ?????????????????????????????????????????????????????????
              </p>

              <p
                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                onClick={swaptextProgram}
              >
                ???????????????????????????????????????????????????
              </p>
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
    </>
  );

  const privateData = (
    <div className="mt-2 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        1. ???????????????????????????????????????
      </p>
      <div>
        <div>
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={(e) => {
              handleFileInputChange(e, id);
            }}
            value={fileInputState}
            className="custom-file-input"
          />

          <label className="custom-file-label" htmlFor="customFile">
            ?????????????????????????????????
          </label>
        </div>

        {PreviewSource && (
          <div className="items-center">
            <img
              className="mt-3"
              src={PreviewSource}
              alt="chosen"
              style={{ width: "180px" }}
            />
          </div>
        )}

        {studentProfile?.student?.image_name && (
          <img src={imageProfile} alt="image" style={{ width: "180px" }} />
        )}

        {studentProfile?.student?.image_name === null && (
          <img
            src={imageNotFound}
            alt="image"
            style={{ width: "200px", height: "300px" }}
          />
        )}
      </div>
      <hr className="mb-10 mt-5" />

      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????"
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
            ?????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????-?????????????????????"
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
            // placeholder="exsample@gmail.com"
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
            ?????????????????????????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????????????????????????????????????????????????????"
            defaultValue={idCard}
            maxLength={11}
            onChange={(e) => {
              setIdCard(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????????????????
          </p>
          <DatePicker
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="Select date"
            selected={birthDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setBirthDate(date)}
          />
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????"
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
            ????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????????????????"
            defaultValue={fatherName}
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={fatherJob}
            onChange={(e) => {
              setFatherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={motherName}
            onChange={(e) => {
              setMotherName(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={motherJob}
            onChange={(e) => {
              setMotherJob(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????"
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
            ?????????????????????
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
                    <>- ??????????????????????????????????????????????????? -</>
                  ) : (
                    <>{`${hometownProvince}`}</>
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
            ???????????????
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
                    <> - ????????????????????????????????????????????? -</>
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
            ????????????
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
                  {hometownSubDistrict === "" ? (
                    <> - ?????????????????????????????????????????? - </>
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

  const SelectPresentAddresses = (
    <>
      {/* // ======================== Addresses API  ======================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-7 mt-3 ">
        {/* ===================== Provinces Selection ===================== */}
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuPresentProvinces}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-present-provinces-setter"
                >
                  {presentProvince === "" ? (
                    <> - ??????????????????????????????????????????????????? - </>
                  ) : (
                    presentProvince
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
                id="drop-down-div-present-provinces"
              >
                {presentProvinces?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextPresentProvinces}
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
            ???????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuPresentDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-present-districts-setter"
                >
                  {presentDistrict === "" ? (
                    <> - ????????????????????????????????????????????? -</>
                  ) : (
                    presentDistrict
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
                id="drop-down-div-present-districts"
              >
                {presentDistricts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextPresentDistricts}
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
            ????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuPresentSubDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-present-subdistricts-setter"
                >
                  {presentSubDistrict === "" ? (
                    <> - ?????????????????????????????????????????? - </>
                  ) : (
                    presentSubDistrict
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
                id="drop-down-div-present-subdistricts"
              >
                {presentSubDistricts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextPresentSubDistricts}
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
        2. ???????????????????????????????????????
      </p>
      {SelectHometownAddresses}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????????????????????????????"
            defaultValue={hometownPostCode}
            onChange={(e) => {
              setHometownPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????? / ????????? / ????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????? / ????????? / ????????????"
            defaultValue={hometownRoad}
            onChange={(e) => {
              setHometownRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={hometownHouseNumber}
            onChange={(e) => {
              setHometownHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
  const presentDataSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        3. ?????????????????????????????????????????????
      </p>
      {SelectPresentAddresses}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????????????????????????????"
            defaultValue={presentPostCode}
            onChange={(e) => {
              setPresentPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????? / ????????? / ????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????? / ????????? / ????????????"
            defaultValue={presentRoad}
            onChange={(e) => {
              setPresentRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={presentHouseNumber}
            onChange={(e) => {
              setPresentHouseNumber(e.target.value);
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
        4. ?????????????????????????????????????????????
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={educationData1?.level}
            onChange={handleEducation1FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????????????????????????????????????????????????????????????????"
            defaultValue={educationData1?.academy}
            onChange={handleEducation1FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={educationData1?.gpa}
            onChange={handleEducation1FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={educationData2?.level}
            onChange={handleEducation2FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????????????????"
            defaultValue={educationData2?.academy}
            onChange={handleEducation2FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={educationData2?.gpa}
            onChange={handleEducation2FormChange("gpa")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={educationData3?.level}
            onChange={handleEducation3FormChange("level")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ???????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????????????????"
            defaultValue={educationData3?.academy}
            onChange={handleEducation3FormChange("academy")}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
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
        5 ?????????????????????????????????????????????
      </p>
      <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????????????????????????? ?????????????????????????????????????????????
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
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
            ?????????????????????????????????????????????????????????????????? 4 ??????????????????????????????????????????????????????
          </p>
          <input
            className="w-24 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
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
            ???????????????????????????????????????????????????????????????????????????????????????????????? / ??????????????????????????????????????????????????????????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????????????????"
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
          6. ?????????????????????????????????????????????
        </p>
        <p className="text-lg font-semibold leading-tight text-gray-800 sm0:hidden  md:grid">
          7. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </p>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????????????????????????????
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????????????????????????????????????????"
            defaultValue={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <p className="text-lg font-semibold leading-tight text-gray-800 lg:hidden md:hidden">
          7. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </p>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </p>
          <textarea
            className="w-full h-48 p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
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

  const SelectContactPersonAddresses = (
    <>
      {/* // ======================== Addresses API  ======================== */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 gap-7 mt-3 ">
        {/* ===================== Provinces Selection ===================== */}
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuContactPersonProvinces}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-contact-person-provinces-setter"
                >
                  {contactPersonProvince == "" ? (
                    <>- ??????????????????????????????????????????????????? -</>
                  ) : (
                    <>{`${contactPersonProvince}`}</>
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
                id="drop-down-div-contact-person-provinces"
              >
                {contactPersonProvinces?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextContactPersonProvinces}
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
            ???????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuContactPersonDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-contact-person-districts-setter"
                >
                  {contactPersonDistrict == "" ? (
                    <> - ????????????????????????????????????????????? -</>
                  ) : (
                    contactPersonDistrict
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
                id="drop-down-div-contact-person-districts"
              >
                {contactPersonDistricts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextContactPersonDistricts}
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
            ????????????
          </p>
          {/*-Dropdown*/}
          <div className="relative top-1 ">
            <div className="relative w-full mt-2 border border-gray-300 rounded outline-none dropdown-one">
              <div
                onClick={showDropDownMenuContactPersonSubDistricts}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-gray-600"
                  id="drop-down-contact-person-subdistricts-setter"
                >
                  {contactPersonSubDistrict == "" ? (
                    <> - ?????????????????????????????????????????? - </>
                  ) : (
                    contactPersonSubDistrict
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
                id="drop-down-div-contact-person-subdistricts"
              >
                {contactPersonSubDistricts?.map((item) => {
                  {
                    return (
                      <p
                        key={item.id}
                        className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                        onClick={swaptextContactPersonSubDistricts}
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

  const contactPersonSection = (
    <div className="mt-10 px-7">
      <p className="text-lg font-semibold leading-tight text-gray-800">
        8. ?????????????????????????????????????????????????????????????????????
      </p>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={contactPersonFirstName}
            onChange={(e) => {
              setContactPersonFirstName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????????????????"
            defaultValue={contactPersonLastName}
            onChange={(e) => {
              setContactPersonLastName(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????????????????????????????????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="???????????????????????????"
            defaultValue={contactPersonRelationship}
            onChange={(e) => {
              setContactPersonRelationship(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>

      {SelectContactPersonAddresses}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????????????????????????????????"
            defaultValue={contactPersonPostCode}
            onChange={(e) => {
              setContactPersonPostCode(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>

        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ????????? / ????????? / ????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="????????? / ????????? / ????????????"
            defaultValue={contactPersonRoad}
            onChange={(e) => {
              setContactPersonRoad(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ??????????????????????????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="??????????????????????????????"
            defaultValue={contactPersonHouseNumber}
            onChange={(e) => {
              setContactPersonHouseNumber(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-7 mt-7 ">
        <div>
          <p className="text-base font-medium leading-none text-gray-800">
            ?????????
          </p>
          <input
            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
            // placeholder="?????????"
            defaultValue={contactPersonPhone}
            onChange={(e) => {
              setContactPersonPhone(e.target.value);
            }}
          />
          <p className="mt-3 text-xs leading-3 text-gray-600"></p>
        </div>
      </div>
    </div>
  );

  // ========================== Student Section =========================
  const navigate = useNavigate();

  const studentSection = (
    <div>
      <div className="2xl:px-56 xl:px-48 lg:px-36">
        <div className="flex flex-no-wrap items-center">
          <div className="w-full ">
            <div className="py-4 px-2">
              <div className="">
                <Link to={`/admin/manage/login/update/student/${id}`}>
                  {" "}
                  <button
                    onCLick={(e) => navigate(-1)}
                    id="back"
                    className="items-end w-32 text-white btn btn-sky cursor-pointer"
                  >
                    ????????????
                  </button>
                </Link>
              </div>
              <form onSubmit={(e) => handleFormSave(e)}>
                <div className="bg-white rounded shadow mt-7 py-7">
                  {/* end */}
                  {/* ??????????????????????????????????????? */}
                  {privateData}
                  {/* ??????????????????????????? */}
                  {hometownDataSection}
                  {/* ????????????????????????????????????????????? */}
                  {presentDataSection}
                  {/* ????????????????????????????????????????????? */}
                  {educationSection}
                  {/* ?????????????????????????????????????????????????????? */}
                  {experienceSection}
                  {/* ???????????????????????????????????????????????? */}
                  {gpaSection}
                  {/* ????????????????????????????????????????????? */}
                  {skillSection}
                  {/* ???????????????????????? */}
                  {interestSection}
                  {/* ????????????????????????????????????????????????????????????????????? */}
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
    </div>
  );
  return <>{studentSection}</>;
};

export default StudentUpdate;
