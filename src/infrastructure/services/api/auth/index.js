import axios from 'axios';
const { BASE_URL, accessToken, authHeader } = require("../../config");


export default {
    getAuth: async () => {
        if (accessToken != null) {
            const resp = await axios.get((BASE_URL + '/auth/is-auth'), authHeader);
            return resp.data;
        } else {
            return { success: false };
        }
    },
    signin: async (props) => {
        const resp = await axios.post(BASE_URL + '/auth/signin', props, { headers: { "Authentication": accessToken } });

        return resp.data
    }
}