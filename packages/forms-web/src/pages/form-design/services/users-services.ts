import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const getUsersService = async () => {
    const { data } = await axios.get(`${API_BASE_PATH}/users`);
    return data;
}
