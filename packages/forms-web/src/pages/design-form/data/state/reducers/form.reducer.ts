import {Action, ActionType} from '../actions/form.actions';

export interface IFormFieldState {
    form: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: IFormFieldState = {
    form: null,
    loading: false,
    error: null
}

const FormReducer = (state: IFormFieldState = initialState, action: Action): IFormFieldState => {
    switch (action.type) {
        case ActionType.SAVE_FORM_PENDING:
            return {
                loading: true,
                form: null,
                error: null
            }
        case ActionType.SAVE_FORM_SUCCESS:
            return {
                loading: false,
                form: action.payload,
                error: null
            }
        case ActionType.SAVE_FORM_FAIL:
            return {
                loading: false,
                error: action.payload,
                form: null
            }
        default:
            return state;
    }
}

export default FormReducer;
