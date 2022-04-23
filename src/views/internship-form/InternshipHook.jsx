import { useState } from "react";

const InternshipHook = () => {
  const [name, setName] = useState("Akkarapon Phikulsri");
  const [studentId, setStudentId] = useState("63102105112");
  const [program, setProgram] = useState("วิทยาการคอมพิวเตอร์");
  const [phone, setPhone] = useState("0983213212");

  const [internCompanyName, setInternCompanyName] = useState(
    "บริษัท โค้ดทูแพนด้า จำกัด"
  );
  const [internType, setInternType] = useState("ตะวันออกเฉียงเหนือ");
  const [internWork, setInternWork] = useState("developer");
  const [internContactWith, setInternContactWith] = useState("lacakp");
  const [internContactWithPosition, setInternContactWithPosition] =
    useState("HR");
  const [internContactWithPhone, setInternContactWithPhone] =
    useState("0983271231");
  const [internProposeTo, setInternProposeTo] = useState("หัวหน้างานฝ่ายบุคคล");
  const [internPhone, setInternPhone] = useState("0983271232");
  const [internNumber, setInternNumber] = useState("111");
  const [internRoad, setInternRoad] = useState("12");
  const [internSubDistrict, setInternSubDistrict] = useState("ธาตุเชิงชุม");
  const [internDistrict, setInternDistrict] = useState("เมือง");
  const [internProvince, setInternProvince] = useState("สกลนคร");
  const [internPostCode, setInternPostCode] = useState("47000");

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
    setProgram(targetText);
    document.getElementById("drop-down-content-setter-program").innerText =
      targetText;
    document.getElementById("drop-down-div-program").classList.toggle("hidden");
  };
  // ---- end  Drop Down Meny for fild of study ----

  // const showDropDownMenuOne = (el) => {
  //   el.target.parentElement.children[1].classList.toggle("hidden");
  // };
  // function swaptextone(el) {
  //   const targetText = el.target.innerText;
  //   document.getElementById("drop-down-content-setter-one").innerText =
  //     targetText;
  //   document.getElementById("drop-down-div-one").classList.toggle("hidden");
  // }

  const handleSave = (e) => {
    e.preventDefault();
    const senderData = { name, studentId, program, phone };
    const internData = {
      internType,
      internWork,
      internContactWith,
      internContactWithPosition,
      internContactWithPhone,
      internProposeTo,
      internPhone,
      internNumber,
      internRoad,
      internSubDistrict,
      internDistrict,
      internProvince,
      internPostCode,
    };
    console.log(internData, senderData);
  };
  // console.log()

  return {
    showDropDownMenu,
    swaptext,
    showDropDownMenuProgram,
    swaptextProgram,
    handleSave,

    internType,
    setInternType,

    internWork,
    setInternWork,

    internContactWith,
    setInternContactWith,

    internCompanyName,
    setInternCompanyName,

    internContactWithPosition,
    setInternContactWithPosition,

    internContactWithPhone,
    setInternContactWithPhone,

    internProposeTo,
    setInternProposeTo,

    internPhone,
    setInternPhone,

    internNumber,
    setInternNumber,

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

    name,
    setName,

    studentId,
    setStudentId,

    program,
    setProgram,

    phone,
    setPhone,
  };
};
export default InternshipHook;
