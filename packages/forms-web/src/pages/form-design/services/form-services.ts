import {IForm} from "../data/domain/IForm";
import axiosInstance from "../interceptor/api-interceptor";

export const saveFormService = async (form: IForm) => {
    const { data } = await axiosInstance.post(`/forms`, form);
    return data;
}

export const updateFormService = async (form: IForm) => {
    const { data } = await axiosInstance.put(`/forms/${form.id}`, form);
    return data;
}

export const getFormService = async (formId: string) => {
    const { data } = await axiosInstance.get(`/forms/${formId}`);
    return data;
}
