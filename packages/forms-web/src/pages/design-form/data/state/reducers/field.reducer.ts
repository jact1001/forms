import {Action, ActionType} from '../actions/field.actions';

export interface IFormFieldState {
    formFields: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: IFormFieldState = {
    formFields: null,
    loading: false,
    error: null
}

const fieldsReducer = (state: IFormFieldState = initialState, action: Action): IFormFieldState => {
    switch (action.type) {
        case ActionType.QUERY_FIELDS_PENDING:
            return {
                loading: true,
                formFields: null,
                error: null
            }
        case ActionType.QUERY_FIELDS_SUCCESS:
            return {
                loading: false,
                formFields: action.payload,
                error: null
            }
        case ActionType.QUERY_FIELDS_FAIL:
            return {
                loading: false,
                error: action.payload,
                formFields: null
            }
        default:
            return state;
    }
}

export default fieldsReducer;
