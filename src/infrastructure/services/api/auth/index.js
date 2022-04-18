import axios from 'axios';
const { API_URL, accessToken } = require("../../config");
export default {
    getAuth: async () => {
        const response = await axios.get('');

        return response.data
    }
}