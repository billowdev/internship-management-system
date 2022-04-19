import Cookies from "js-cookie";
export const BASE_URL = process.env.REACT_APP_API_URL;
export const accessToken = Cookies.get("access-token");
export const authHeader = {headers: { "Authorization": accessToken } }

