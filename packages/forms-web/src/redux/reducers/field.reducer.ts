import {Action, ActionType} from '../actions/field.actions';
// importar la interface de los datos 

interface State {
    field: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    field: null,
    loading: false,
    error: null
}

const fieldReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FIELD_PENDING:
            return {
                loading: true,
                field: null,
                error: null
            }
        case ActionType.QUERY_FIELD_SUCCESS:
            return {
                loading: false,
                field: action.payload,
                error: null
            }
        case ActionType.QUERY_FIELD_FAIL:
            return {
                loading: false,
                error: action.payload,
                field: null
            }
        default: 
            return state;
    }
}

export default fieldReducer;