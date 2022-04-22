import Cookies from "js-cookie";
export const BASE_URL = "http://localhost:5000/api";
export const accessToken = Cookies.get("access-token");
export const accessHeader = {headers: { "Authorization": accessToken } }

