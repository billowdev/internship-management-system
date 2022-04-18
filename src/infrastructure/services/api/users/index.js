import axios from 'axios';
const { API_URL, accessToken } = require("../../config");
export default {
	getUsers: async () => {
		const response = await axios.get(API_URL + '/users/get/all');
		return response.data
	}
}