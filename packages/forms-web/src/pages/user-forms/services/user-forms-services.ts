import axiosInstance from "../../form-design/interceptor/api-interceptor";

export const getUserForms = async () => {
    const response = await axiosInstance.get(`/user-forms`);
    return response.data
}
