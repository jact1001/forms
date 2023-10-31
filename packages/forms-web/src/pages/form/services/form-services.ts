import axiosInstance from "../../form-design/interceptor/api-interceptor";

export const getUseCase = async (caseId: string) => {
    const response = await axiosInstance.get(`/use-case/${caseId}`);
    return response.data;
}
