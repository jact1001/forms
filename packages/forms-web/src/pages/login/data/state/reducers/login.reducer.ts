import { Action, ActionType } from '../actions/login.actions';

interface State {
    isLogin: boolean;
    email: string
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    isLogin: false,
    email: '',
    loading: false,
    error: null
}

const loginReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.LOGIN_PENDING:
            return {
                email: '',
                loading: true,
                isLogin: false,
                error: null
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                email: action.payload,
                loading: false,
                isLogin: true,
                error: null
            }
        case ActionType.LOGIN_FAIL:
            return {
                email: '',
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
                email: '',
                loading: false,
                isLogin: false,
                error: null
            }
        case ActionType.LOGOUT_FAIL:
            return {
                email: '',
                loading: false,
                error: action.payload,
                isLogin: false
            }
        case ActionType.SET_ACCESS_DENIED:
            return {
                email: '',
                loading: false,
                error: null,
                isLogin: false
            }
        case ActionType.SET_ACCESS_ACCEPTED:
            return {
                email: action.payload,
                loading: false,
                error: null,
                isLogin: true
            }
        default:
            return state;
    }
}

export default loginReducer;
