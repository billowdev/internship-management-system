import axios from 'axios';
import Cookies from "js-cookie";
import { saveState } from "../../../../helpers/Persist.js";
const { BASE_URL, accessToken} = require("../../config");

export const loginApi = async (props) => {
	const resp = await axios.post(BASE_URL + '/auth/signin', props, { headers: { "Authentication": accessToken } });
	if (resp.data) {
		const { id, username, permission, authenticated, token } = resp.data
		Cookies.set("access-token", token, { expires: 7 });
		saveState('auth-state', { id, username, permission, authenticated })
	}
	return resp.data
}
