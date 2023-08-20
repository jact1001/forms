import axios from "axios";
import { API_BASE_PATH } from "../../../config";

export const getFormFields = async () => {
    const {data} = await axios.get(`${API_BASE_PATH}/form-fields`);
    return data?.content;
}
