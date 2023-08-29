import axios from "axios";
import { API_BASE_PATH } from "../../../config";
import {IForm} from "../data/domain/IForm";

export const saveFormService = async (form: IForm) => {
    const { data } = await axios.post(`${API_BASE_PATH}/forms`, form);
    return data;
}

export const getFormService = async (formId: string) => {
    const { data } = await axios.get(`${API_BASE_PATH}/forms/${formId}`);
    return data;
}
