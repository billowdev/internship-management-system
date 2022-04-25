import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../../helpers/Persist";

const ResumeHook = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const [idCard, setidCardCart] = useState("");
  const [religion, setReligion] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherJob, setMotherJob] = useState("");

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

  const handleFormSave = async (e) => {
    e.preventDefault();
    const student = {
      first_name: firstName,
      last_name: lastName,
      phone,
      bod: birthDate,
      id_card: idCard,
      religion,
      father_name: fatherName,
      father_job: fatherJob,
      mother_name: motherName,
      mother_job: motherJob,
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

    console.log(student, hometown, present);
  };

  useEffect(() => {
    const intern = loadState("internship");
    const resume = loadState("profile");
    const resumeData = resume?.student;
    const hometownData = resume?.HometownAddress;
    const presentData = resume?.PresentAddress;
    console.log(presentData);
    // private student data
    setidCardCart(resumeData?.id_card);
    setFirstName(resumeData?.first_name);
    setLastName(resumeData?.last_name);
    setReligion(resumeData?.religion);
    setFatherName(resumeData?.father_name);
    setFatherJob(resumeData?.father_job);
    setMotherName(resumeData?.mother_name);
    setMotherJob(resumeData?.mother_job);

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

    console.log(intern);
  }, []);

  return {
    handleFormSave,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthDate,
    setBirthDate,
    phone,
    setPhone,

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

    idCard,
    setidCardCart,
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
  };
};

export default ResumeHook;
