import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const saveFormService = async (form: any) => {
    const response = await axios.post(`${API_BASE_PATH}/forms`, form);
    return response.data;
}
