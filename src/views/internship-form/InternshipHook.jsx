import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadInternship,
  updateInternship,
} from "../../application/actions/student/internship";
import { loadState, removeState, saveState } from "../../helpers/Persist";
import * as thaiAddresses from "../../services/api/thaiAddresses/thaiAddressApi";

const InternshipHook = () => {
  const dispatch = useDispatch();

  const [internFormData, setInternFormData] = useState({
    internType: "",
    internWork: "",
    internCompanyName: "",
    internContactWithName: "",
    internContactWithPosition: "",
    internContactWithPhone: "",
    internProposeTo: "",
    internPhone: "",
    internHouseNumber: "",
    internRoad: "",
    internSubDistrict: "",
    internDistrict: "",
    internProvince: "",
    internPostCode: "",
  });

  const [studentFormData, setStudentFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    phone: "",
  });

  const [coStudentFormData, setCoStudentFormData] = useState({
    firstPerson: { id: "", firstName: "", lastName: "", phone: "" },
    secondPerson: { id: "", firstName: "", lastName: "", phone: "" },
    thirdPerson: { id: "", firstName: "", lastName: "", phone: "" },
    fourthPerson: { id: "", firstName: "", lastName: "", phone: "" },
  });

  //Edit Form Data
  const handleStudentFormChange = (input) => (e) => {
    e.preventDefault();
    setStudentFormData({ ...studentFormData, [input]: e.target.value });
  };
  const handleCoStudentFormChange = (person, input) => (e) => {
    e.preventDefault();
    const updateValue = {
      ...coStudentFormData,
      [person]: {
        ...coStudentFormData[person],
        ...{ [input]: e.target.value },
      },
    };
    setCoStudentFormData(updateValue);
  };

  const handleInternFormChange = (input) => (e) => {
    e.preventDefault();
    setInternFormData({ ...internFormData, [input]: e.target.value });
  };

  const handleInternDataFormChange = (input, data) => {
    setInternFormData({ ...internFormData, [input]: data });
  };

  const handleFormSave = async (e) => {
    e.preventDefault();
    const studentDataSave = {
      id: studentFormData.id,
      firstName: studentFormData.firstName,
      lastName: studentFormData.lastName,
      email: studentFormData.email,
      program: studentFormData.program,
      phone: studentFormData.phone,
    };
    
    const InternshipDataSave = {
      internType: internFormData.internType,
      internWork: internFormData.internWork,
      internCompanyName: internFormData.internCompanyName,
      internContactWithName: internFormData.internContactWithName,
      internContactWithPosition: internFormData.internContactWithPosition,
      internContactWithPhone: internFormData.internContactWithPhone,
      internProposeTo: internFormData.internProposeTo,
      internPhone: internFormData.internPhone,
      internHouseNumber: internFormData.internHouseNumber,
      internRoad: internFormData.internRoad,
      internSubDistrict: internFormData.internSubDistrict,
      internDistrict: internFormData.internDistrict,
      internProvince: internFormData.internProvince,
      internPostCode: internFormData.internPostCode,
    };
    const CoStudentInternshipData = {
      firstPerson: {
        id: coStudentFormData.firstPerson.id,
        firstName: coStudentFormData.firstPerson.firstName,
        lastName: coStudentFormData.firstPerson.lastName,
        phone: coStudentFormData.firstPerson.phone,
      },
      secondPerson: {
        id: coStudentFormData.secondPerson.id,
        firstName: coStudentFormData.secondPerson.firstName,
        lastName: coStudentFormData.secondPerson.lastName,
        phone: coStudentFormData.secondPerson.phone,
      },
      thirdPerson: {
        id: coStudentFormData.thirdPerson.id,
        firstName: coStudentFormData.thirdPerson.firstName,
        lastName: coStudentFormData.thirdPerson.lastName,
        phone: coStudentFormData.thirdPerson.phone,
      },
      fourthPerson: {
        id: coStudentFormData.fourthPerson.id,
        firstName: coStudentFormData.fourthPerson.firstName,
        lastName: coStudentFormData.fourthPerson.lastName,
        phone: coStudentFormData.fourthPerson.phone,
      },
    };

    const updateData = {
      studentDataSave,
      InternshipDataSave,
      CoStudentInternshipData,
    };
    console.log(updateData);
    dispatch(updateInternship(updateData));
  };

  useEffect(() => {
    const intern = loadState("internship");
    const sender = loadState("profile");
    const senderData = sender?.student;
    setStudentFormData({
      id: senderData?.id,
      firstName: senderData?.first_name,
      lastName: senderData?.last_name,
      email: senderData?.email,
      program: senderData?.program,
      phone: senderData?.phone,
    });
    const internCompanyData = intern?.Companies?.company;
    const internCompanyAddressData = intern?.Companies?.companyAddress;
    const internCoStudentData = intern?.CoStudentInternships;
    setInternFormData({
      internType: internCompanyData?.type,
      internWork: internCompanyData?.activities,
      internCompanyName: internCompanyData?.name,
      internContactWithName: internCompanyData?.contact_person_name,
      internContactWithPosition: internCompanyData?.contact_person_position,
      internContactWithPhone: internCompanyData?.contact_person_phone,
      internProposeTo: internCompanyData?.propose_to,
      internPhone: internCompanyData?.phone,
      internHouseNumber: internCompanyAddressData?.house_number,
      internRoad: internCompanyAddressData?.road,
      internSubDistrict: internCompanyAddressData?.sub_district,
      internDistrict: internCompanyAddressData?.district,
      internProvince: internCompanyAddressData?.province,
      internPostCode: internCompanyAddressData?.post_code,
    });

    setCoStudentFormData({
      firstPerson: {
        id: internCoStudentData[0]?.id,
        firstName: internCoStudentData[0]?.first_name,
        lastName: internCoStudentData[0]?.last_name,
        phone: internCoStudentData[0]?.phone,
      },
      secondPerson: {
        id: internCoStudentData[1]?.id,
        firstName: internCoStudentData[1]?.first_name,
        lastName: internCoStudentData[1]?.last_name,
        phone: internCoStudentData[1]?.phone,
      },
      thirdPerson: {
        id: internCoStudentData[2]?.id,
        firstName: internCoStudentData[2]?.first_name,
        lastName: internCoStudentData[2]?.last_name,
        phone: internCoStudentData[2]?.phone,
      },
      fourthPerson: {
        id: internCoStudentData[3]?.id,
        firstName: internCoStudentData[3]?.first_name,
        lastName: internCoStudentData[3]?.last_name,
        phone: internCoStudentData[3]?.phone,
      },
    });
  }, [handleFormSave]);

  // ---- Drop Down Meny for company branch or region ---
  const showDropDownMenu = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext = (el) => {
    const targetText = el.target.innerText;
    setInternFormData({ ...internFormData, ["internType"]: targetText });
    saveState("type-select", targetText);
    document.getElementById("drop-down-content-setter").innerText = targetText;
    document.getElementById("drop-down-div").classList.toggle("hidden");
  };
  // ---- Drop Down Meny for company branch or region ---

  // ---- Drop Down Meny for fild of study ---
  const showDropDownMenuProgram = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };

  const swaptextProgram = (el) => {
    const targetText = el.target.innerText;
    setStudentFormData({ ...studentFormData, ["program"]: targetText });
    document.getElementById("drop-down-content-setter-program").innerText =
      targetText;
    document.getElementById("drop-down-div-program").classList.toggle("hidden");
  };
  // ---- end  Drop Down Meny for fild of study ----

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
    removeState("provinceId");
  };
  const swaptextProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    // setInternFormData({ ...internFormData, ["internProvince"]: targetText })
    saveState("provinceId", provinceId);
    saveState("province-select", targetText);
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
    removeState("districtId");
    fetchDistricts(loadState("provinceId"));
  };
  const swaptextDistricts = (el) => {
    const targetText = el.target.innerText;
    setInternFormData({ ...internFormData, ["internDistrict"]: targetText });
    const districtId = Object.values(el.target)[0].key;
    saveState("districtId", districtId);
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
    fetchSubDistricts(loadState("districtId"));
    removeState("districtId");
  };
  const swaptextSubDistricts = (el) => {
    const targetText = el.target.innerText;
    handleInternDataFormChange("");
    setInternFormData({ ...internFormData, ["internSubDistrict"]: targetText });
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
    const type = loadState("type-select");
    setInternFormData({ ...internFormData, ["internType"]: type });
  }, []);

  return {
    internFormData,
    studentFormData,
    handleStudentFormChange,
    handleInternFormChange,
    handleFormSave,

    showDropDownMenu,
    swaptext,
    showDropDownMenuProgram,
    swaptextProgram,

    handleCoStudentFormChange,
    coStudentFormData,
    setCoStudentFormData,
    handleInternDataFormChange,

    provinces,
    districts,
    subDistricts,
    subDistrictData,
    showDropDownMenuProvinces,
    showDropDownMenuDistricts,
    swaptextProvinces,
    showDropDownMenuSubDistricts,
    swaptextDistricts,
    swaptextSubDistricts,
  };
};
export default InternshipHook;
