import axios from 'axios';
const { BASE_URL } = require("../../config");

export default {
	getGeographies: async () => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/geographies/all'));
		return resp.data;
	},
	getAllProvinces: async () => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/provinces/all'));
		return resp.data;
	},
	getProvinces: async (props) => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/provinces/' + props));
		return resp.data;
	},
	getDistricts: async (props) => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/districts/' + props));
		return resp.data;
	},
	getSubDistricts: async (props) => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/sub-districts/' + props));
		return resp.data;
	},
	getSubDistrictById: async (props) => {
		const resp = await axios.get((BASE_URL + '/thai-addresses/get/sub-districts/ById/100101'));
		return resp.data;
	},
}
