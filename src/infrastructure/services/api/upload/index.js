

import axios from 'axios';
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
	uploadStudentImages: async (props) => {
		console.log("on middleware",props)
		const resp = await axios.post(`${BASE_URL}/upload/student/profile`, props, accessHeader
		);
		console.log(resp.data)
		return resp.data;
	},

}
