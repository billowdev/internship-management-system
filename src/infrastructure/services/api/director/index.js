import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	getInternshipPending: async (props) => {
		const resp = await axios.get(`${BASE_URL}/directors/get/internships/pending${props}`, accessHeader
		);
		return resp.data;
	},
	getInternshipConfirm: async (props) => {
		const resp = await axios.get(`${BASE_URL}/directors/get/internships/confirm${props}`, accessHeader
		);
		return resp.data;
	},
	getInternshipDetail: async (props) => {
		const resp = await axios.get(`${BASE_URL}/directors/get/internships/detail/${props}`, accessHeader
		);
		return resp.data;
	},
}
