import { Action, ActionType } from '../actions/user-forms.actions';
import { IUserForms } from "../../domain/IUserForms";

interface State {
    userForms: IUserForms | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    userForms: null,
    loading: false,
    error: null
}

const userFormsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_USER_FORMS_PENDING:
            return {
                loading: true,
                userForms: null,
                error: null
            }
        case ActionType.QUERY_USER_FORMS_SUCCESS:
            return {
                loading: false,
                userForms: action.payload,
                error: null
            }
        case ActionType.QUERY_USER_FORMS_FAIL:
            return {
                loading: false,
                error: action.payload,
                userForms: null
            }
        default:
            return state;
    }
}

export default userFormsReducer;
