import { Action, ActionType } from '../actions/user-forms.actions';
import { IUserForms } from "../../domain/IUserForms";

interface State {
    userForms: IUserForms | null;
    loading: boolean;
    error: string | null;
    createUseCaseLoading: boolean;
    createUseCaseError: string | null;
}

const initialState: State = {
    userForms: null,
    loading: false,
    error: null,
    createUseCaseLoading: false,
    createUseCaseError: null
}

const userFormsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_USER_FORMS_PENDING:
            return {
                ...state,
                loading: true,
                userForms: null,
                error: null
            }
        case ActionType.QUERY_USER_FORMS_SUCCESS:
            return {
                ...state,
                loading: false,
                userForms: action.payload,
                error: null
            }
        case ActionType.QUERY_USER_FORMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                userForms: null
            }
        case ActionType.CREATE_USE_CASE_PENDING:
            return {
                ...state,
                createUseCaseLoading: true,
            }
        case ActionType.CREATE_USE_CASE_SUCCESS:
            return {
                ...state,
                createUseCaseLoading: false,
                userForms: action.payload,
                error: null
            }
        case ActionType.CREATE_USE_CASE_FAIL:
            return {
                ...state,
                createUseCaseLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default userFormsReducer;
