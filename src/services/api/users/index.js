import axios from 'axios';
const { BASE_URL, accessToken } = require("../../config");
export default {
	getUsers: async () => {
		const response = await axios.get(BASE_URL + '/users/get/all');
		return response.data
	}
}