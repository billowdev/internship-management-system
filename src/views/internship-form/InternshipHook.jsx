import { useState, useEffect } from "react";
import { loadState } from "../../helpers/Persist";

const InternshipHook = () => {
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
    setInternFormData({ ...studentFormData, [input]: e.target.value });
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
        id: coStudentFormData.firstPerson.id,
        firstName: coStudentFormData.firstPerson.firstName,
        lastName: coStudentFormData.firstPerson.lastName,
        phone: coStudentFormData.firstPerson.phone,
      },
      fourthPerson: {
        id: coStudentFormData.firstPerson.id,
        firstName: coStudentFormData.firstPerson.firstName,
        lastName: coStudentFormData.firstPerson.lastName,
        phone: coStudentFormData.firstPerson.phone,
      },
    };

    console.log(studentDataSave, InternshipDataSave, CoStudentInternshipData)
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
  }, []);

  // ---- Drop Down Meny for company branch or region ---
  const showDropDownMenu = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext = (el) => {
    const targetText = el.target.innerText;
    setInternFormData({ ...internFormData, ["internType"]: targetText });
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
  };
};
export default InternshipHook;
