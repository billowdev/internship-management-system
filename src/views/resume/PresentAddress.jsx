import { useState, useEffect } from "react";
import { loadState, removeState, saveState } from "../../helpers/Persist";
import * as thaiAddresses from "../../services/api/thaiAddresses/thaiAddressApi";
const PresentAddress = () => {
	
  // ======================== Addresses API  ========================
  const [presentProvinces, setPresentProvinces] = useState([]);
  const [presentDistricts, setPresentDistricts] = useState([]);
  const [presentSubDistricts, setPresentSubDistricts] = useState([]);
  const [presentSubDistrictData, setPresentSubDistrictData] = useState([]);

  const fetchpresentProvinces = async () => {
    const resp = await thaiAddresses.getAllpresentProvinces();
    setPresentProvinces(resp.data);
  };
  const fetchpresentDistricts = async (provinceId) => {
    const resp = await thaiAddresses.getpresentDistricts(provinceId);
    setPresentDistricts(resp.data);
  };
  const fetchpresentSubDistricts = async (districtId) => {
    const resp = await thaiAddresses.getpresentSubDistricts(districtId);
    setPresentSubDistricts(resp.data);
  };
  const fetchpresentSubDistrictData = async (subDistrictId) => {
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    setPresentSubDistrictData(resp.data);
  };

  // -------- presentProvinces --------
  const showDropDownMenupresentProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState('provinceId')
  };
  const swaptextpresentProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    saveState('provinceId', provinceId)
    fetchpresentDistricts(provinceId);
    document.getElementById("drop-down-presentProvinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-presentProvinces")
      .classList.toggle("hidden");
  };
  // -------- presentDistricts --------
  const showDropDownMenupresentDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState('districtId')
    fetchpresentDistricts(loadState('provinceId'));
  };
  const swaptextpresentDistricts = (el) => {
    const targetText = el.target.innerText;
    const districtId = Object.values(el.target)[0].key;
    saveState('districtId', districtId)
    fetchpresentSubDistricts(districtId);
    document.getElementById("drop-down-presentDistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-presentDistricts")
      .classList.toggle("hidden");
  };
  // -------- Sub presentDistricts --------
  const showDropDownMenupresentSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchpresentSubDistricts(loadState('districtId'));
    removeState('districtId')
  };
  const swaptextpresentSubDistricts = (el) => {
    const targetText = el.target.innerText;
    const subDistrictId = Object.values(el.target)[0].key;
    fetchpresentSubDistrictData(subDistrictId);
    document.getElementById("drop-down-presentSubDistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-presentSubDistricts")
      .classList.toggle("hidden");
  };

  useEffect(() => {
    fetchpresentProvinces();
  }, []);

  return {
    presentProvinces,
    presentDistricts,
    presentSubDistricts,
    presentSubDistrictData,
    showDropDownMenupresentProvinces,
    showDropDownMenupresentDistricts,
    swaptextpresentProvinces,
    showDropDownMenupresentSubDistricts,
    swaptextpresentDistricts,
    swaptextpresentSubDistricts,
  };
};

export default PresentAddress;
