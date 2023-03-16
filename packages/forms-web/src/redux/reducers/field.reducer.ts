import {Action, ActionType} from '../actions/field.actions';
// importar la interface de los datos

interface State {
    fieldForms: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    fieldForms: null,
    loading: false,
    error: null
}

const fieldsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FIELDS_PENDING:
            return {
                loading: true,
                fieldForms: null,
                error: null
            }
        case ActionType.QUERY_FIELDS_SUCCESS:
            return {
                loading: false,
                fieldForms: action.payload,
                error: null
            }
        case ActionType.QUERY_FIELDS_FAIL:
            return {
                loading: false,
                error: action.payload,
                fieldForms: null
            }
        default:
            return state;
    }
}

export default fieldsReducer;
