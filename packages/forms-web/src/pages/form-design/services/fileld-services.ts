import axiosInstance from "../interceptor/api-interceptor";

export const getFormFields = async () => {
    const { data } = await axiosInstance.get(`/form-fields`);
    return data;
}
