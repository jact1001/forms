import axiosInstance from "../../form-design/interceptor/api-interceptor";
import { IForm } from "../data/domain/IForm";

export const getUseCase = async (caseId: string) => {
    const response = await axiosInstance.get(`/use-case/${caseId}`);
    return response.data;
}

export const updateUseCaseService = async (form: IForm) => {
    const { data } = await axiosInstance.put(`/use-case`, form);
    return data;
}
