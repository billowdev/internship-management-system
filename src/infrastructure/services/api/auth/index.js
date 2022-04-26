import axios from 'axios';
import Cookies from "js-cookie";
import { saveState } from "../../../../helpers/Persist.js";
const { BASE_URL, accessToken, accessHeader } = require("../../config");

export default {
    getAuth: async () => {
        if (accessToken != null) {
            const resp = await axios.get((BASE_URL + '/auth/is-auth'), accessHeader);
            return resp.data;
        } else {
            return { success: false };
        }
    },
    signin: async (props) => {
        const resp = await axios.post(BASE_URL + '/auth/signin', props, { headers: { "Authentication": accessToken } });
        if(resp.data){
            const { id, username, roles, authenticated , token } = resp.data
            Cookies.set("access-token", token, { expires: 7 });
            saveState('auth-state', { id, username, roles, authenticated})
        }
        return resp.data
    }
   
}
