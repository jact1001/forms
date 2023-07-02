import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const getFormFields = async () => {
    const response = await axios.get(`${API_BASE_PATH}/form-fields`);
    return response.data
}
