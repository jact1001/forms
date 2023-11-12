import axios from "axios";
import {API_BASE_PATH} from "../../../config";
import {store} from "../../../store";
import {ActionType as LoginActionTypes} from "../../login/data/state/actions/login.actions";

const axiosInstance = axios.create({
    baseURL: API_BASE_PATH
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            store.dispatch({type: LoginActionTypes.SET_ACCESS_DENIED});
            sessionStorage.removeItem('isAuthenticated');
        }
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use((config) => {
    if (config && config.headers){
        const session = JSON.parse(sessionStorage.getItem('session') || '');
        config.headers['x-access-token'] = session?.token;
    }
    return config;
})

export default axiosInstance;
