import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	getProfile: async () => {
		const resp = await axios.get(`${BASE_URL}/students/get`, accessHeader
		);
		return resp.data;
	},
	getInternship: async () => {
		const resp = await axios.get(`${BASE_URL}/internships/get/information`, accessHeader
		);
		return resp.data;
	},
	updateInternship: async (props) => {
		const resp = await axios.patch(`${BASE_URL}/internships/update/information`, props, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		);
		return resp.data;
	},
}
