import {Action, ActionType} from '../actions/form-fields.actions';
import {IFormFields} from "../../domain/IFormFields";

export interface IFormFieldsState {
    formFields: IFormFields | null;
    loading: boolean;
    error: string | null;
}

const initialState: IFormFieldsState = {
    formFields: null,
    loading: false,
    error: null
}

const formFieldsReducer = (state: IFormFieldsState = initialState, action: Action): IFormFieldsState => {
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

export default formFieldsReducer;
