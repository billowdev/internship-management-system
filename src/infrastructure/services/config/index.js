import Cookies from "js-cookie";
export const BASE_URL = "https://ims-billowdev.herokuapp.com/api";
export const accessToken = Cookies.get("access-token");
export const accessHeader = {headers: { "Authorization": accessToken } }

