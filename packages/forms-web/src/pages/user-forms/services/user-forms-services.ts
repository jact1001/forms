import axiosInstance from "../../form-design/interceptor/api-interceptor";
import {IFormCase} from "../data/domain/IUserForms";

export const getUserForms = async () => {
    const response = await axiosInstance.get(`/user-forms`);
    return response.data
}

export const createUseCase = async (useCase: IFormCase, formId: string) => {
    const response = await axiosInstance.post(`/user-forms/use-case`, {useCase, formId});
    return response.data
}
