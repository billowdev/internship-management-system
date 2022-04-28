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

	updateInternshipStatus: async (status, props) => {
		if (status == "confirm") {
			const resp = await axios.patch(`${BASE_URL}/directors/confirm/internships`, { id: props }, accessHeader
			);
			return resp.data;
		}
		if (status == "unconfirm") {
			const resp = await axios.patch(`${BASE_URL}/directors/unconfirm/internships`, { id: props }, accessHeader
			);
			return resp.data;
		}
		if (status == "return") {
			const resp = await axios.patch(`${BASE_URL}/directors/return/internships`, { id: props }, accessHeader
			);
			return resp.data;
		}

	},
}
