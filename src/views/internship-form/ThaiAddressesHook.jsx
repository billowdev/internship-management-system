import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  loadGeographies,
  loadAllProvinces,
  loadProvinces,
  loadDistricts,
  loadSubDistricts,
  loadSubDistrictById,
} from "../../application/actions/thaiAddresses";
import { loadState } from "../../helpers/Persist";
const ThaiAddressesHook = () => {
  const dispatch = useDispatch();
//   const [geographies, setGeographies] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [allProvinces, setAllProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subDistricts, setSubDistricts] = useState([]);
  const [subDistrictData, setSubDistrictData] = useState([]);

  const getProvinces = (geographyId) => {
    dispatch(loadProvinces(geographyId));
    setProvinces(loadState("provinces"));
  };
  const getDistricts = (provinceId) => {
    dispatch(loadDistricts(provinceId));
    setDistricts(loadState("districts"));
  };
  const getSubDistricts = (districtId) => {
    dispatch(loadSubDistricts(districtId));
    setSubDistricts(loadState("sub-district"));
  };
  const getSubDistrictById = (SubDistrictId) => {
    dispatch(loadSubDistrictById(SubDistrictId));
    setSubDistrictData(loadState("sub-district-data"));
  };

  useEffect(() => {
    // setGeographies(loadState("geographies"));
    setAllProvinces(loadState("all-provinces"));
  }, []);

  useEffect(() => {
    // dispatch(loadGeographies);
	dispatch(loadAllProvinces);
  }, [dispatch]);

  return {
    // geographies,
    getProvinces,
    getDistricts,
    getSubDistricts,
    getSubDistrictById,
	provinces,
	allProvinces,
	districts,
	subDistricts,
	subDistrictData
  };
};
export default ThaiAddressesHook;
