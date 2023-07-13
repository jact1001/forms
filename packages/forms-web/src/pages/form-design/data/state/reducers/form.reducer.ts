import { Action, ActionType } from '../actions/form.actions';
import { addSectionField } from "../../use-cases/use-add-section-field";
import { updateSectionField } from "../../use-cases/use-update-section-field";
import { IForm } from "../../domain/IForm";

export interface IFormState {
    form: IForm;
    loading: boolean;
    error: string | null;
}

const initialState: IFormState = {
    form: {
        state: '',
        form_name: "Estudio 2",
        sections: [
            {
                access: [
                    {
                        userId: "0001",
                        userName: "Secretaria",
                        permission: ["read", "write"]
                    }
                ],
                fields: [],
                sectionName: '',
            }
        ]
    },
    loading: false,
    error: null
}

const formReducer = (state: IFormState = initialState, action: Action): IFormState => {
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
