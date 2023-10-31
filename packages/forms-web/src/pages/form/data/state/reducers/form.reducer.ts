import {Action, ActionType} from '../actions/form.actions';
import {IForm} from '../../domain/IForm';
import {updateFormField} from "../../use-cases/use-update-form-field";


interface State {
    form: IForm ;
    loading: boolean;
    error: string | null;
    updateLoading: boolean;
    updateError: string | null;
}

const initialState: State = {
    form: {form_name:"",state:"",sections:[]},
    loading: false,
    error: null,
    updateLoading: false,
    updateError: null
}

const formReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FORM_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.QUERY_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                form: action.payload,
            }
        case ActionType.QUERY_FORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ActionType.UPDATE_FORM_PENDING:
            return {
                ...state,
                updateLoading: true,
            }
        case ActionType.UPDATE_FORM_SUCCESS:
            return {
                ...state,
                updateLoading: false,
                form: action.payload,
            }
        case ActionType.UPDATE_FORM_FAIL:
            return {
                ...state,
                updateLoading: false,
                updateError: action.payload,
            }
        case ActionType.UPDATE_FORM_FIELD:
            return {
                ...state,
                form: updateFormField(state.form, action.payload.sectionId, action.payload.field)
            }
        default:
            return state;
    }
}

export default formReducer;
