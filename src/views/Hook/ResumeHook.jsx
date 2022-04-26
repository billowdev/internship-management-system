import React, { useEffect, useState } from "react";
import { loadResume } from "../../redux/actions/student/resume";
import { updateResume } from "../../redux/actions/student/resume";
import Moment from "moment";
import { useDispatch } from "react-redux";
import * as thaiAddresses from "../../infrastructure/services/api/thaiAddresses/thaiAddressApi";
import { loadState, removeState, saveState } from "../../helpers/Persist";


const Resumehook = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState("");

  const [idCard, setIdCard] = useState("");
  const [religion, setReligion] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherJob, setMotherJob] = useState("");
  const [program, setProgram] = useState("");

  const [interest, setInterest] = useState("");
  const [skill, setSkill] = useState("");
  const [exp, setExp] = useState("");
  const [presentGpa, setPresentGpa] = useState("");
  const [projectTopic, setProjectTopic] = useState("");

  const [hometownHouseNumber, setHometownHouseNumber] = useState("");
  const [hometownRoad, setHometownRoad] = useState("");

  const [presentHouseNumber, setPresentHouseNumber] = useState("");
  const [presentRoad, setPresentRoad] = useState("");

  const [hometownSubDistrict, setHometownSubDistrict] = useState("");
  const [hometownDistrict, setHometownDistrict] = useState("");
  const [hometownProvince, setHometownProvince] = useState("");
  const [hometownPostCode, setHometownPostCode] = useState([]);

  const [presentSubDistrict, setPresentSubDistrict] = useState("");
  const [presentDistrict, setPresentDistrict] = useState("");
  const [presentProvince, setPresentProvince] = useState("");



  const [presentPostCode, setPresentPostCode] = useState("");

  const [educationData1, setEducationData1] = useState({
    academy: "",
    gpa: "",
    id: "",
    level: "",
  });

  const [educationData2, setEducationData2] = useState({
    academy: "",
    gpa: "",
    id: "",
    level: "",
  });
  const [educationData3, setEducationData3] = useState({
    academy: "",
    gpa: "",
    id: "",
    level: "",
  });

  // ---- Drop Down Meny for fild of study ---
  const showDropDownMenuProgram = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };

  const swaptextProgram = (el) => {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-program").innerText =
      targetText;
    document.getElementById("drop-down-div-program").classList.toggle("hidden");
  };
  // ---- end  Drop Down Meny for fild of study ----

  // Hometown Hook Section
  // ======================== Addresses API  ========================
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);

  const fetchProvinces = async () => {
    const resp = await thaiAddresses.getAllProvinces();
    setProvinces(resp.data);
    setPresentProvinces(resp.data)
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
    console.log(subDistrictId);
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    setHometownPostCode(resp.data[0]?.zip_code);
    console.log(resp.data[0]);
  };

  // -------- Provinces --------
  const showDropDownMenuHometownProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("hometown-province-id");
  };
  const swaptextHometownProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setHometownProvince(targetText);
    saveState("hometown-province-id", provinceId);
    fetchDistricts(provinceId);
    document.getElementById("drop-down-hometown-provinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometown-provinces")
      .classList.toggle("hidden");
  };

  // -------- Districts --------
  const showDropDownMenuHometownDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("hometown-district-id");
    fetchDistricts(loadState("hometown-province-id"));
  };
  const swaptextHometownDistricts = (el) => {
    const targetText = el.target.innerText;
    setHometownDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("hometown-district-id", districtId);
    fetchSubDistricts(districtId);
    document.getElementById("drop-down-hometown-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometown-districts")
      .classList.toggle("hidden");
  };
  // -------- Sub districts --------
  const showDropDownMenuHometownSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchSubDistricts(loadState("hometown-district-id"));
    removeState("hometown-district-id");
  };
  const swaptextHometownSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setHometownSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData(subDistrictId);
    document.getElementById("drop-down-hometown-subdistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometown-subdistricts")
      .classList.toggle("hidden");
  };
  // ======================== Addresses API  ========================
 





// Present Hook Section
  // ======================== Addresses API  ========================
  const [presentSubDistricts, setPresentSubDistricts] = useState([]);
  const [presentDistricts, setPresentDistricts] = useState([]);
  const [presentProvinces, setPresentProvinces] = useState([]);

  const fetchPresentProvinces = async () => {
    const resp = await thaiAddresses.getAllProvinces();
    setPresentProvinces(resp.data);
  };
  const fetchPresentDistricts = async (provinceId) => {
    const resp = await thaiAddresses.getDistricts(provinceId);
    setPresentDistricts(resp.data);
  };
  const fetchPresentSubDistricts = async (districtId) => {
    const resp = await thaiAddresses.getSubDistricts(districtId);
    setPresentSubDistricts(resp.data);
  };
  const fetchPresentSubDistrictData = async (subDistrictId) => {
    console.log(subDistrictId);
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    setPresentPostCode(resp.data[0]?.zip_code);
  };

  // -------- Provinces --------
  const showDropDownMenuPresentProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("present-province-id");
  };
  const swaptextPresentProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setPresentProvince(targetText);
    saveState("present-province-id", provinceId);
    fetchPresentDistricts(provinceId);
    document.getElementById("drop-down-present-provinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-provinces")
      .classList.toggle("hidden");
  };

  // -------- Districts --------
  const showDropDownMenuPresentDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("present-district-id");
    fetchDistricts(loadState("present-province-id"));
  };
  const swaptextPresentDistricts = (el) => {
    const targetText = el.target.innerText;
    setPresentDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("present-district-id", districtId);
    fetchPresentSubDistricts(districtId);
    document.getElementById("drop-down-present-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-districts")
      .classList.toggle("hidden");
  };
  // -------- Sub districts --------
  const showDropDownMenuPresentSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchPresentSubDistricts(loadState("present-district-id"));
    removeState("present-district-id");
  };
  const swaptextPresentSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setPresentSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchPresentSubDistrictData(subDistrictId);
    document.getElementById("drop-down-present-subdistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-subdistricts")
      .classList.toggle("hidden");
  };
  // ======================== Addresses API  ========================


  const handleEducation1FormChange = (input) => (e) => {
    e.preventDefault();
    setEducationData1({ ...educationData1, [input]: e.target.value });
  };
  const handleEducation2FormChange = (input) => (e) => {
    e.preventDefault();
    setEducationData2({ ...educationData2, [input]: e.target.value });
  };
  const handleEducation3FormChange = (input) => (e) => {
    e.preventDefault();
    setEducationData3({ ...educationData3, [input]: e.target.value });
  };

  const handleFormSave = async (e) => {
    e.preventDefault();
    // const dob = e.target[3].value;
    const newDob = Moment(new Date(birthDate)).format("yyyy-MM-DD");
    const program = document.getElementById("program").innerText;
    const student = {
      first_name: firstName,
      last_name: lastName,
      phone,
      dob: newDob,
      id_card: idCard,
      religion,
      father_name: fatherName,
      father_job: fatherJob,
      mother_name: motherName,
      mother_job: motherJob,
      interest,
      skill,
      exp,
      program,
      email,
      project_topic: projectTopic,
      present_gpa: presentGpa,
    };
    const hometown = {
      house_number: hometownHouseNumber,
      road: hometownRoad,
      sub_district: hometownSubDistrict,
      district: hometownDistrict,
      province: hometownProvince,
      post_code: hometownPostCode,
    };
    const present = {
      house_number: presentHouseNumber,
      road: presentRoad,
      sub_district: presentSubDistricts,
      district: presentDistricts,
      province: presentProvinces,
      post_code: presentPostCode,
    };
    const education = {
      educationData1,
      educationData2,
      educationData3,
    };
    const updateData = { student, hometown, present, education };
    dispatch(updateResume(updateData));
  };

  const fetchHometownProvinces = async () => {
    const resp = await thaiAddresses.getAllProvinces();
    setHometownProvince(resp.data);
  };

  const fetchHometownDistricts = async (provinceId) => {
    const resp = await thaiAddresses.getDistricts(provinceId);
    setHometownDistrict(resp.data);
  };
  const fetchHometownSubDistricts = async (districtId) => {
    const resp = await thaiAddresses.getSubDistricts(districtId);
    setHometownSubDistrict(resp.data);
  };
  const fetchPostCode = async (subDistrictId) => {
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    return resp.data[0]?.zip_code;
  };

  const SelectProgram = (
    <>
      {" "}
      <div>
        <p className="text-base font-medium leading-none text-gray-800">
          สาขาวิชา
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
                {program == "" ? "วิทยาการคอมพิวเตอร์" : program}
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
                วิทยาการคอมพิวเตอร์
              </p>

              <p
                className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                onClick={swaptextProgram}
              >
                เทคโนโลยีสารสนเทศ
              </p>
            </div>
          </div>
          {/* end */}
        </div>
        {/* end */}
      </div>
    </>
  );

  return {
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

    presentSubDistricts,
    presentDistricts,
    presentProvinces,

    presentPostCode,

    setPresentHouseNumber,
    setPresentRoad,

    setPresentSubDistrict,
    setPresentDistrict,
    setPresentProvince,

    setPresentSubDistricts,
    setPresentDistricts,
    setPresentProvinces,

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

    fetchProvinces,
  };
};

export default Resumehook;
