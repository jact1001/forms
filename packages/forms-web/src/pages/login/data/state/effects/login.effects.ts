import { Dispatch } from 'redux';
import { ActionType as LoginActionTypes, Action as LoginAction } from '../actions/login.actions';
import { callLogin, callLogout } from "../../../services/login-services";

export const login = (tokenId: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionTypes.LOGIN_PENDING
        });
        try {
            const data = await callLogin(tokenId);
            const { session: backendSession } = data;
            dispatch({
                type: LoginActionTypes.LOGIN_SUCCESS,
                payload: data
            });
            sessionStorage.setItem('session', backendSession);
        } catch (err: any) {
            dispatch({
                type: LoginActionTypes.LOGIN_FAIL,
                payload: err.message
            });
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionTypes.LOGOUT_PENDING
        });
        try {
            const data = await callLogout();
            dispatch({
                type: LoginActionTypes.LOGOUT_SUCCESS,
                payload: data
            });
            sessionStorage.removeItem('session');
        } catch (err: any) {
            dispatch({
                type: LoginActionTypes.LOGOUT_FAIL,
                payload: err.message
            });
        }
    }
}

export const setAccessAccepted = () => {
    return async  (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionTypes.SET_ACCESS_ACCEPTED
        });
    }
}
