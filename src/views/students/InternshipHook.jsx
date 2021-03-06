import { useState } from "react";
import { updateInternship } from "../../redux/actions/student/internship";
import { loadState, removeState, saveState } from "../../helpers/Persist";
import * as thaiAddresses from "../../infrastructure/services/api/thaiAddresses/thaiAddressApi";
import { useDispatch } from "react-redux";

const Internshiphook = () => {
  const dispatch = useDispatch();
  const [internType, setInternType] = useState("");
  const [internWork, setInternWork] = useState("");
  const [internCompanyName, setInternCompanyName] = useState("");
  const [internContactWithName, setInternContactWithName] = useState("");
  const [internContactWithPosition, setInternContactWithPosition] =
    useState("");
  const [internContactWithPhone, setInternContactWithPhone] = useState("");
  const [internProposeTo, setInternProposeTo] = useState("");
  const [internPhone, setInternPhone] = useState("");
  const [internHouseNumber, setInternHouseNumber] = useState("");
  const [internRoad, setInternRoad] = useState("");
  const [internSubDistrict, setInternSubDistrict] = useState("");
  const [internDistrict, setInternDistrict] = useState("");
  const [internProvince, setInternProvince] = useState("");
  const [internPostCode, setInternPostCode] = useState("");

  const [studentFormData, setStudentFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    phone: "",
  });

  const [coStudentFormData, setCoStudentFormData] = useState({
    firstPerson: { id: "", studentId: "", firstName: "", lastName: "", phone: "" },
    secondPerson: { id: "", studentId: "", firstName: "", lastName: "", phone: "" },
    thirdPerson: { id: "", studentId: "", firstName: "", lastName: "", phone: "" },
    fourthPerson: { id: "", studentId: "", firstName: "", lastName: "", phone: "" },
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

  const handleFormSave = async (e) => {
    e.preventDefault();
    const program = document.getElementById("program").innerText;
    const sender = {
      id: studentFormData.id,
      first_name: studentFormData.firstName,
      last_name: studentFormData.lastName,
      email: studentFormData.email,
      program: program,
      phone: studentFormData.phone,
    };

    const companies = {
      type: internType,
      activities: internWork,
      name: internCompanyName,
      contact_person_name: internContactWithName,
      contact_person_position: internContactWithPosition,
      contact_person_phone: internContactWithPhone,
      propose_to: internProposeTo,
      phone: internPhone,
      house_number: internHouseNumber,
    };
    const companyAddress = {
      road: internRoad,
      sub_district: internSubDistrict,
      district: internDistrict,
      province: internProvince,
      post_code: internPostCode,
    };
    let firstId = coStudentFormData.firstPerson.id
    let secondId = coStudentFormData.secondPerson.id
    let thirdId = coStudentFormData.thirdPerson.id
    let fourthId = coStudentFormData.fourthPerson.id

    if(firstId===undefined) firstId="";
    if(secondId===undefined) secondId="";
    if(thirdId===undefined) thirdId="";
    if(fourthId===undefined) fourthId="";

    const coStudent = {
      firstPerson: {
        id: firstId,
        student_id: coStudentFormData.firstPerson.studentId,
        first_name: coStudentFormData.firstPerson.firstName,
        last_name: coStudentFormData.firstPerson.lastName,
        phone: coStudentFormData.firstPerson.phone,
      },
      secondPerson: {
        id: secondId,
        student_id: coStudentFormData.secondPerson.studentId,
        first_name: coStudentFormData.secondPerson.firstName,
        last_name: coStudentFormData.secondPerson.lastName,
        phone: coStudentFormData.secondPerson.phone,
      },
      thirdPerson: {
        id: thirdId,
        student_id: coStudentFormData.thirdPerson.studentId,
        first_name: coStudentFormData.thirdPerson.firstName,
        last_name: coStudentFormData.thirdPerson.lastName,
        phone: coStudentFormData.thirdPerson.phone,
      },
      fourthPerson: {
        id: fourthId,
        student_id: coStudentFormData.fourthPerson.studentId,
        first_name: coStudentFormData.fourthPerson.firstName,
        last_name: coStudentFormData.fourthPerson.lastName,
        phone: coStudentFormData.fourthPerson.phone,
      },
    };
    const updateData = {
      sender,
      companies,
      companyAddress,
      coStudent,
    };
    dispatch(updateInternship(updateData));
  };

  // ---- Drop Down Meny for company branch or region ---
  const showDropDownMenu = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext = (el) => {
    const targetText = el.target.innerText;
    setInternType(targetText);
   

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
    document.getElementById("drop-down-content-setter-program").innerText =
      targetText;
    document.getElementById("drop-down-div-program").classList.toggle("hidden");
  };
  // ---- end  Drop Down Meny for fild of study ----

  // ======================== Addresses API  ========================
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);

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
    setInternPostCode(resp.data[0]?.zip_code);
  };

  // -------- Provinces --------
  const showDropDownMenuProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("provinceId");
  };
  const swaptextProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setInternProvince(targetText);
    saveState("provinceId", provinceId);
    fetchDistricts(provinceId);
    setTimeout(function(){ 
      document.getElementById("drop-down-provinces-setter").innerText =
        targetText;
      document
        .getElementById("drop-down-div-provinces")
        .classList.toggle("hidden");
    }, 500);
  };

  // -------- Districts --------
  const showDropDownMenuDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState("districtId");
    fetchDistricts(loadState("provinceId"));
  };
  const swaptextDistricts = (el) => {
    const targetText = el.target.innerText;
    setInternDistrict(targetText);
    const districtId = Object.values(el.target)[0].key;
    saveState("districtId", districtId);
    fetchSubDistricts(districtId);
    setTimeout(function(){ 
      document.getElementById("drop-down-districts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-districts")
      .classList.toggle("hidden");
  }, 500);
    
  };
  // -------- Sub districts --------
  const showDropDownMenuSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchSubDistricts(loadState("districtId"));
    removeState("districtId");
  };
  const swaptextSubDistricts = (el) => {
    const targetText = el.target.innerText;
    setInternSubDistrict(targetText);
    const subDistrictId = Object.values(el.target)[0].key;
    fetchSubDistrictData(subDistrictId);

    setTimeout(function(){ 
      document.getElementById("drop-down-subdistricts-setter").innerText =
        targetText;
      document
        .getElementById("drop-down-div-subdistricts")
        .classList.toggle("hidden");
   
    }, 500);
  };

  return {
    internType,
    setInternType,
    internWork,
    setInternWork,
    internCompanyName,
    setInternCompanyName,
    internContactWithName,
    setInternContactWithName,
    internContactWithPosition,
    setInternContactWithPosition,
    internContactWithPhone,
    setInternContactWithPhone,
    internProposeTo,
    setInternProposeTo,
    internPhone,
    setInternPhone,
    internHouseNumber,
    setInternHouseNumber,
    internRoad,
    setInternRoad,
    internSubDistrict,
    setInternSubDistrict,
    internDistrict,
    setInternDistrict,
    internProvince,
    setInternProvince,
    internPostCode,
    setInternPostCode,

    studentFormData,
    setStudentFormData,
    coStudentFormData,
    setCoStudentFormData,
    handleCoStudentFormChange,
    handleStudentFormChange,

    swaptextSubDistricts,
    showDropDownMenuSubDistricts,
    swaptextDistricts,
    showDropDownMenuDistricts,
    swaptextProvinces,
    showDropDownMenuProvinces,
    handleFormSave,

	
    fetchProvinces,
    showDropDownMenuProgram,
    swaptext,
    swaptextProgram,
    provinces,
    districts,
    subDistricts,
    showDropDownMenu,
  };
};

export default Internshiphook;
