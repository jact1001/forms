import {Action, ActionType} from '../actions/form.actions';
import {addSectionField} from "../../use-cases/use-add-section-field";
import {updateSectionField} from "../../use-cases/use-update-section-field";

export interface IFormFieldState {
    form: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: IFormFieldState = {
    form: {
        formName: "Estudio 2",
        sections: [
            {
                permissions: [
                    {
                        roleId: "0001",
                        text: "Secretaria",
                        permission: ["read", "write"]
                    }
                ],
                fields: []
            }
        ]
    },
    loading: false,
    error: null
}

const formReducer = (state: IFormFieldState = initialState, action: Action): IFormFieldState => {
    switch (action.type) {
        case ActionType.SAVE_FORM_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ActionType.SAVE_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case ActionType.SAVE_FORM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ActionType.ADD_SECTION_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: addSectionField('', action.payload, state.form.sections)
                }
            }
        case ActionType.UPDATE_SECTION_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: updateSectionField('', action.payload, state.form.sections)
                }
            }
        default:
            return state;
    }
}

export default formReducer;
