import React, { useState } from "react";
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

  const [contactPersonPhone, setContactPersonPhone] = useState("");
  const [contactPersonFirstName, setContactPersonFirstName] = useState("");
  const [contactPersonLastName, setContactPersonLastName] = useState("");
  const [contactPersonRelationship, setContactPersonRelationship] =
    useState("");

  const [contactPersonHouseNumber, setContactPersonHouseNumber] = useState("");
  const [contactPersonRoad, setContactPersonRoad] = useState("");
  const [contactPersonSubDistrict, setContactPersonSubDistrict] = useState("");
  const [contactPersonDistrict, setContactPersonDistrict] = useState("");
  const [contactPersonProvince, setContactPersonProvince] = useState("");
  const [contactPersonPostCode, setContactPersonPostCode] = useState("");

  const [hometownHouseNumber, setHometownHouseNumber] = useState("");
  const [hometownRoad, setHometownRoad] = useState("");

  const [presentHouseNumber, setPresentHouseNumber] = useState("");
  const [presentRoad, setPresentRoad] = useState("");

  const [hometownSubDistrict, setHometownSubDistrict] = useState("");
  const [hometownDistrict, setHometownDistrict] = useState("");
  const [hometownProvince, setHometownProvince] = useState("");
  const [hometownPostCode, setHometownPostCode] = useState("");

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

  const [contactPersonSubDistricts, setContactPersonSubDistricts] = useState(
    []
  );
  const [contactPersonDistricts, setContactPersonDistricts] = useState([]);
  const [contactPersonProvinces, setContactPersonProvinces] = useState([]);

  const [presentSubDistricts, setPresentSubDistricts] = useState([]);
  const [presentDistricts, setPresentDistricts] = useState([]);
  const [presentProvinces, setPresentProvinces] = useState([]);

  const fetchProvinces = async () => {
    const resp = await thaiAddresses.getAllProvinces();
    setProvinces(resp.data);
    setPresentProvinces(resp.data);
    setContactPersonProvinces(resp.data);
  };

  const fetchDistricts = async (option, provinceId) => {
    const resp = await thaiAddresses.getDistricts(provinceId);
    if (option == "present") {
      setPresentDistricts(resp.data);
    }
    if (option == "hometown") {
      // const resp = await thaiAddresses.getDistricts(provinceId);
      setDistricts(resp.data);
    }
    if (option == "contactPerson") {
      // const resp = await thaiAddresses.getDistricts(provinceId);
      setContactPersonDistricts(resp.data);
    }
  };
  const fetchSubDistricts = async (option, districtId) => {
    const resp = await thaiAddresses.getSubDistricts(districtId);
    if (option == "present") {
      setPresentSubDistricts(resp.data);
    }
    if (option == "hometown") {
      // const resp = await thaiAddresses.getSubDistricts(districtId);
      setSubDistricts(resp.data);
    }
    if (option == "contactPerson") {
      // const resp = await thaiAddresses.getSubDistricts(districtId);
      setContactPersonSubDistricts(resp.data);
    }
  };
  const fetchSubDistrictData = async (option, subDistrictId) => {
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    if (option == "present") {
      setPresentPostCode(resp.data[0]?.zip_code);
    }
    if (option == "hometown") {
      // const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
      setHometownPostCode(resp.data[0]?.zip_code);
    }
    if (option == "contactPerson") {
      // const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
      setContactPersonPostCode(resp.data[0]?.zip_code);
    }
  };

  // -------- Provinces --------
  const showDropDownMenuHometownProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    // removeState("hometown-province-id");
  };
  const swaptextHometownProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setHometownProvince(targetText);
    saveState("hometown-province-id", provinceId);
    fetchDistricts("hometown", provinceId);
    document.getElementById("drop-down-hometown-provinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometown-provinces")
      .classList.toggle("hidden");
  };

  // -------- Districts --------
  const showDropDownMenuHometownDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    // removeState("hometown-district-id");
    fetchDistricts("hometown", loadState("hometown-province-id"));
  };
  const swaptextHometownDistricts = (el) => {
    const targetText = el.target.innerText;
    setHometownDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("hometown-district-id", districtId);
    fetchSubDistricts("hometown",districtId);
    document.getElementById("drop-down-hometown-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometown-districts")
      .classList.toggle("hidden");
  };

  // -------- Sub districts --------
  const showDropDownMenuHometownSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchSubDistricts("hometown",loadState("hometown-district-id"));
    // removeState("hometown-district-id");
  };
  const swaptextHometownSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setHometownSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData("hometown", subDistrictId);
    document.getElementById(
      "drop-down-hometown-subdistricts-setter"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div-hometown-subdistricts")
      .classList.toggle("hidden");
  };

  // Present Hook Section
  // ======================== Addresses API  ========================

  // -------- Provinces --------
  const showDropDownMenuPresentProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextPresentProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setPresentProvince(targetText);
    saveState("present-province-id", provinceId);
    fetchDistricts("present", provinceId);
    document.getElementById("drop-down-present-provinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-provinces")
      .classList.toggle("hidden");
  };

  // -------- Districts --------
  const showDropDownMenuPresentDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchDistricts("present", loadState("present-province-id"));
  };
  const swaptextPresentDistricts = (el) => {
    const targetText = el.target.innerText;
    setPresentDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("present-district-id", districtId);
    fetchSubDistricts("present", districtId);
    document.getElementById("drop-down-present-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-districts")
      .classList.toggle("hidden");
  };
  // -------- Sub districts --------
  const showDropDownMenuPresentSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchSubDistricts("present", loadState("present-district-id"));
  };
  const swaptextPresentSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setPresentSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData("present", subDistrictId);
    document.getElementById("drop-down-present-subdistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-present-subdistricts")
      .classList.toggle("hidden");
  };


  // ======================== contact Person Hook Section   ========================
  // -------- Provinces --------
  const showDropDownMenuContactPersonProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextContactPersonProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setContactPersonProvince(targetText);
    saveState("contact-person-province-id", provinceId);
    fetchDistricts("contactPerson", provinceId);
    document.getElementById(
      "drop-down-contact-person-provinces-setter"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div-contact-person-provinces")
      .classList.toggle("hidden");
  };

  // -------- Districts --------
  const showDropDownMenuContactPersonDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchDistricts("contactPerson", loadState("contact-person-province-id"));
  };
  const swaptextContactPersonDistricts = (el) => {
    const targetText = el.target.innerText;
    setContactPersonDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("contact-person-district-id", districtId);
    fetchSubDistricts("contactPerson", districtId);
    setTimeout(function () {
      document.getElementById(
        "drop-down-contact-person-districts-setter"
      ).innerText = targetText;
      document
        .getElementById("drop-down-div-contact-person-districts")
        .classList.toggle("hidden");
    }, 100);
  };
  // -------- Sub districts --------
  const showDropDownMenuContactPersonSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchSubDistricts("contactPerson", loadState("contact-person-district-id"));
  };
  const swaptextContactPersonSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setContactPersonSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData("contactPerson", subDistrictId);

    setTimeout(function () {
      document.getElementById(
        "drop-down-contact-person-subdistricts-setter"
      ).innerText = targetText;
      document
        .getElementById("drop-down-div-contact-person-subdistricts")
        .classList.toggle("hidden");
    }, 100);
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

    const contactPerson = {
      data: {
        first_name: contactPersonFirstName,
        last_name: contactPersonLastName,
        relationship: contactPersonRelationship,
      },
      address: {
        house_number: contactPersonHouseNumber,
        road: contactPersonRoad,
        sub_district: contactPersonSubDistrict,
        district: contactPersonDistrict,
        province: contactPersonProvince,
        post_code: contactPersonPostCode,
      },
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
    const updateData = { student, hometown, present, contactPerson, education };
    dispatch(updateResume(updateData));
    // console.log(updateData);
  };
  
  return {
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

    showDropDownMenuProgram,
    swaptextProgram,

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

    fetchProvinces,
  };
};

export default Resumehook;
