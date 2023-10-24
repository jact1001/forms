import {Action, ActionType} from '../actions/form.actions';
import {IForm} from '../../domain/IForm';
import {updateFormField} from "../../use-cases/use-update-form-field";


interface State {
    form: IForm ;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    form: {form_name:"",state:"",sections:[]},
    loading: false,
    error: null
}

const formReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_FORM_PENDING:
            return {
                ...state,
                loading: true,
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
                ...state,
                loading: false,
                error: action.payload,
            }
        case ActionType.UPDATE_FORM_FIELD:
            return {
                loading: false,
                error: null,
                form: updateFormField(state.form, action.payload.sectionId, action.payload.field)
            }
        default:
            return state;
    }
}

export default formReducer;
