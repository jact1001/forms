import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const getForm = async () => {
    const response = await axios.get(`${API_BASE_PATH}/form`);
    return response.data
}
