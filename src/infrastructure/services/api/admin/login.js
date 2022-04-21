import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	getLogin: async (props) => {
		console.log("on api ", props)
		const resp = await axios.get(`${BASE_URL}/admin/login/get${props}`, accessHeader
		);
		return resp.data;
	},
}
