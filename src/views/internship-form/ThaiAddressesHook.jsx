import { useState, useEffect } from "react";
import { loadState, removeState, saveState } from "../../helpers/Persist";
import * as thaiAddresses from "../../services/api/thaiAddresses/thaiAddressApi";
import InternshipHook from "./InternshipHook";


const Thaiaddresseshook = () => {
  const {internFormData, setInternFormData} = InternshipHook()
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
    removeState('provinceId')
  };
  const swaptextProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    setInternFormData({ ...internFormData, ["internProvince"]: targetText });
    saveState('provinceId', provinceId)
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
    removeState('districtId')
    fetchDistricts(loadState('provinceId'));
  };
  const swaptextDistricts = (el) => {
    const targetText = el.target.innerText;
    setInternFormData({ ...internFormData, ["internDistrict"]: targetText });
    const districtId = Object.values(el.target)[0].key;
    saveState('districtId', districtId)
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
    fetchSubDistricts(loadState('districtId'));
    removeState('districtId')
  };
  const swaptextSubDistricts = (el) => {
    const targetText = el.target.innerText;
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
  }, []);

  return {
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

export default Thaiaddresseshook;
