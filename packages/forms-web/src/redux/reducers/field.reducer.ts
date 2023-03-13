import {Action, ActionType} from '../actions/field.actions';
// importar la interface de los datos

interface State {
    fields: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    fields: null,
    loading: false,
    error: null
}

const fieldsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FIELDS_PENDING:
            return {
                loading: true,
                fields: null,
                error: null
            }
        case ActionType.QUERY_FIELDS_SUCCESS:
            return {
                loading: false,
                fields: action.payload,
                error: null
            }
        case ActionType.QUERY_FIELDS_FAIL:
            return {
                loading: false,
                error: action.payload,
                fields: null
            }
        default:
            return state;
    }
}

export default fieldsReducer;
