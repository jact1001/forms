import axiosInstance from "../interceptor/api-interceptor";

export const getFormFields = async () => {
    const cookieValue = sessionStorage.getItem('session') || '';
    const { data } = await axiosInstance.get(`/form-fields`, { headers: { 'x-access-token': cookieValue } });
    return data;
}
