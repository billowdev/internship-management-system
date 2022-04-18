import Cookies from "js-cookie";
export const API_URL = process.env.REACT_APP_API_URL;
export const accessToken = Cookies.get("access-token");