import { useState, useEffect } from "react";
import { loadState, removeState, saveState } from "../../helpers/Persist";
import * as thaiAddresses from "../../services/api/thaiAddresses/thaiAddressApi";
const HometownAddress = () => {
	
  // ======================== Addresses API  ========================
  const [hometownProvinces, setHometownProvinces] = useState([]);
  const [hometownDistricts, setHometownDistricts] = useState([]);
  const [hometownSubDistricts, setHometownSubDistricts] = useState([]);
  const [hometownSubDistrictData, setHometownSubDistrictData] = useState([]);

  const fetchhometownProvinces = async () => {
    const resp = await thaiAddresses.getAllhometownProvinces();
    setHometownProvinces(resp.data);
  };
  const fetchhometownDistricts = async (provinceId) => {
    const resp = await thaiAddresses.gethometownDistricts(provinceId);
    setHometownDistricts(resp.data);
  };
  const fetchhometownSubDistricts = async (districtId) => {
    const resp = await thaiAddresses.gethometownSubDistricts(districtId);
    setHometownSubDistricts(resp.data);
  };
  const fetchhometownSubDistrictData = async (subDistrictId) => {
    const resp = await thaiAddresses.getSubDistrictById(subDistrictId);
    setHometownSubDistrictData(resp.data);
  };

  // -------- hometownProvinces --------
  const showDropDownMenuhometownProvinces = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState('provinceId')
  };
  const swaptexthometownProvinces = (el) => {
    const targetText = el.target.innerText;
    const provinceId = Object.values(el.target)[0].key;
    saveState('provinceId', provinceId)
    fetchhometownDistricts(provinceId);
    document.getElementById("drop-down-hometownProvinces-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometownProvinces")
      .classList.toggle("hidden");
  };
  // -------- hometownDistricts --------
  const showDropDownMenuhometownDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    removeState('districtId')
    fetchhometownDistricts(loadState('provinceId'));
  };
  const swaptexthometownDistricts = (el) => {
    const targetText = el.target.innerText;
    const districtId = Object.values(el.target)[0].key;
    saveState('districtId', districtId)
    fetchhometownSubDistricts(districtId);
    document.getElementById("drop-down-hometownDistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometownDistricts")
      .classList.toggle("hidden");
  };
  // -------- Sub hometownDistricts --------
  const showDropDownMenuhometownSubDistricts = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
    fetchhometownSubDistricts(loadState('districtId'));
    removeState('districtId')
  };
  const swaptexthometownSubDistricts = (el) => {
    const targetText = el.target.innerText;
    const subDistrictId = Object.values(el.target)[0].key;
    fetchhometownSubDistrictData(subDistrictId);
    document.getElementById("drop-down-hometownSubDistricts-setter").innerText =
      targetText;
    document
      .getElementById("drop-down-div-hometownSubDistricts")
      .classList.toggle("hidden");
  };

  useEffect(() => {
    fetchhometownProvinces();
  }, []);

  return {
    hometownProvinces,
    hometownDistricts,
    hometownSubDistricts,
    hometownSubDistrictData,
    showDropDownMenuhometownProvinces,
    showDropDownMenuhometownDistricts,
    swaptexthometownProvinces,
    showDropDownMenuhometownSubDistricts,
    swaptexthometownDistricts,
    swaptexthometownSubDistricts,
  };
};

export default HometownAddress;
