import { Action, ActionType } from '../actions/login.actions';

interface State {
    isLogin: boolean
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    isLogin: false,
    loading: false,
    error: null
}

const loginReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.LOGIN_PENDING:
            return {
                loading: true,
                isLogin: false,
                error: null
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                loading: false,
                isLogin: true,
                error: null
            }
        case ActionType.LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
                isLogin: false
            }
        case ActionType.LOGOUT_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.LOGOUT_SUCCESS:
            return {
                loading: false,
                isLogin: false,
                error: null
            }
        case ActionType.LOGOUT_FAIL:
            return {
                loading: false,
                error: action.payload,
                isLogin: false
            }
        case ActionType.SET_ACCESS_DENIED:
            return {
                loading: false,
                error: null,
                isLogin: false
            }
        case ActionType.SET_ACCESS_ACCEPTED:
            return {
                loading: false,
                error: null,
                isLogin: true
            }
        default:
            return state;
    }
}

export default loginReducer;
