import axios from 'axios';
import Cookies from "js-cookie";
import { saveState } from "../../../helpers/Persist.js";
const { BASE_URL, accessToken } = require("../../config");

export const getGeographies = async () => {
	const resp = await axios.get((BASE_URL + '/thai-addresses/get/geographies/all'));
	return resp.data;
}
export const getAllProvinces = async () => {
	const resp = await axios.get((BASE_URL + '/thai-addresses/get/provinces/all'));
	return resp.data;
}
export const getProvinces = async (props) => {
	const resp = await axios.get((BASE_URL + '/thai-addresses/get/provinces/' + props));
	return resp.data;
}
export const getDistricts = async (props) => {
	const resp = await axios.get((BASE_URL + '/thai-addresses/get/districts/' + props));
	return resp.data;
}
export const getSubDistricts = async (props) => {
	const resp = await axios.get((BASE_URL + '/thai-addresses/get/sub-districts/' + props));
	return resp.data;
}
export const getSubDistrictById = async (props) => {
	const resp = await axios.get(BASE_URL + '/thai-addresses/get/sub-districts/ById/' + props);
	return resp.data;
}
