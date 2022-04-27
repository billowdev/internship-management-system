import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	getLogin: async (props) => {
		const resp = await axios.get(`${BASE_URL}/admin/login/get${props}`, accessHeader
		);
		return resp.data;
	},
	createLogin: async (props) => {
		const resp = await axios.post(`${BASE_URL}/admin/login/create`, props, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		);
		return resp.data;
	},
	updateLogin: async (props) => {
		const resp = await axios.patch(`${BASE_URL}/admin/login/update/${props?.id}`, props, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		);
		return resp.data;
	},
	deleteLogin: async (props) => {

		const resp = await axios.post(`${BASE_URL}/admin/login/destroy`, { id: props }, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		);
		return resp.data;
	},
}
