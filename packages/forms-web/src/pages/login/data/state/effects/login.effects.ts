import { Dispatch } from 'redux';
import { ActionType as LoginActionTypes, Action as LoginAction } from '../actions/login.actions';
import { callLogin, callLogout } from "../../../services/login-services";

export const login = (tokenId: string, email: string) => {
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
            const session = {token: backendSession, email: email}
            sessionStorage.setItem('session', JSON.stringify(session));
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

export const setAccessAccepted = (email: string) => {
    return async  (dispatch: Dispatch<LoginAction>) => {
        dispatch({
            type: LoginActionTypes.SET_ACCESS_ACCEPTED,
            payload: email
        });
    }
}
