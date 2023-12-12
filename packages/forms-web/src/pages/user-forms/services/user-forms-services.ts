import axiosInstance from "../../form-design/interceptor/api-interceptor";
import {IFormCase} from "../data/domain/IUserForms";

export const getUserForms = async () => {
    const response = await axiosInstance.get(`/user-forms`);
    return response.data
}

export const download = async (formId: string) => {
    const response = await axiosInstance.get(`/user-forms/export/${formId}`, {
        responseType: 'blob',
    });
    console.log('response: ', response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'output.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

export const createUseCase = async (useCase: IFormCase, formId: string) => {
    const response = await axiosInstance.post(`/user-forms/use-case`, {useCase, formId});
    return response.data
}
