import React, { useEffect, useState } from "react";
import { loadResume } from "../../redux/actions/student/resume";
import { updateResume } from "../../redux/actions/student/resume";
import Moment from "moment";
import { loadState } from "../../helpers/Persist";
import { useDispatch } from "react-redux";

const Resumehook = () => {
  const dispatch = useDispatch();
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
  const [hometownSubDistrict, setHometownSubDistrict] = useState("");
  const [hometownDistrict, setHometownDistrict] = useState("");
  const [hometownProvince, setHometownProvince] = useState("");
  const [hometownPostCode, setHometownPostCode] = useState("");

  const [presentHouseNumber, setPresentHouseNumber] = useState("");
  const [presentRoad, setPresentRoad] = useState("");
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
    const dob = e.target[3].value;
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
      sub_district: presentSubDistrict,
      district: presentDistrict,
      province: presentProvince,
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
    setHometownHouseNumber,
    hometownRoad,
    setHometownRoad,
    hometownSubDistrict,
    setHometownSubDistrict,
    hometownDistrict,
    setHometownDistrict,
    hometownProvince,
    setHometownProvince,
    hometownPostCode,
    setHometownPostCode,

    presentHouseNumber,
    setPresentHouseNumber,
    presentRoad,
    setPresentRoad,
    presentSubDistrict,
    setPresentSubDistrict,
    presentDistrict,
    setPresentDistrict,
    presentProvince,
    setPresentProvince,
    presentPostCode,
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
    setEducationData3
  };
};

export default Resumehook;
