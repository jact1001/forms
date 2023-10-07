import axios from "axios";
import { API_BASE_PATH } from "../../../config";
import { store } from "../../../store";
import { ActionType as LoginActionTypes } from "../../login/data/state/actions/login.actions";

const cookieValue = sessionStorage.getItem('session') || '';

const axiosInstance = axios.create({
    baseURL: API_BASE_PATH,
    headers: { 'x-access-token': cookieValue },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            store.dispatch({type: LoginActionTypes.SET_ACCESS_DENIED});
            localStorage.removeItem('isAuthenticated');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
