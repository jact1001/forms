import axiosInstance from "../../form-design/interceptor/api-interceptor";
import { IUseCase } from "../data/domain/IUseCase";

export const getUseCase = async (caseId: string) => {
    const response = await axiosInstance.get(`/use-case/${caseId}`);
    return response.data;
}

export const updateUseCaseService = async (form: IUseCase) => {
    const { data } = await axiosInstance.put(`/use-case`, form);
    return data;
}
