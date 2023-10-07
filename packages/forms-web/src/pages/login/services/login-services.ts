import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const callLogin = async (tokenId: string) => {

    const axiosInstance = axios.create({
        baseURL: API_BASE_PATH,
        headers: { Authorization: `Bearer ${tokenId}` },
        withCredentials: true
    });
    const response = await axiosInstance.post(`/users/login`);
    return response.data;
}

export const callLogout = async () => {
    const response = await axios.get(`${API_BASE_PATH}/users/logout`);
    return response.data;
}
