import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const getFormFields = async () => {
    const response = await axios.get(`${API_BASE_PATH}/field`);
    return response.data
}
