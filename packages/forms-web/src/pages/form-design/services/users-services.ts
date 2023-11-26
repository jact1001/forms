import axiosInstance from "../interceptor/api-interceptor";

export const getUsersService = async () => {
    const { data } = await axiosInstance.get(`/users`);
    return data;
}
