import {Action, ActionType} from '../actions/form.actions';

interface State {
    form: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    form: null,
    loading: false,
    error: null
}

const formReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FORM_PENDING:
            return {
                loading: true,
                form: null,
                error: null
            }
        case ActionType.QUERY_FORM_SUCCESS:
            return {
                loading: false,
                form: action.payload,
                error: null
            }
        case ActionType.QUERY_FORM_FAIL:
            return {
                loading: false,
                error: action.payload,
                form: null
            }
        default:
            return state;
    }
}

export default formReducer;
