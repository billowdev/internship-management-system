import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	getStudentProfile: async (props) => {
		const resp = await axios.get(`${BASE_URL}/admin/students/get/${props}`, accessHeader
		);
		return resp.data;
	},
	updateStudentProfile: async (props) => {
		const resp = await axios.patch(`${BASE_URL}/admin/students/update/${props.id}`, props, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		);
		return resp.data;
	},
}
