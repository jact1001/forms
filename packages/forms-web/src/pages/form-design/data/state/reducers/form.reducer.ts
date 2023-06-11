import {Action, ActionType} from '../actions/form.actions';

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

const updateFieldsSection = (sectionId: string, field: any, sections: any[]) => {
    return [{...sections[0], fields: [...sections[0].fields, field]}];
}

const formReducer = (state: IFormFieldState = initialState, action: Action): IFormFieldState => {
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
        case ActionType.UPDATE_FIELD_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: updateFieldsSection('', action.payload, state.form.sections)
                }
            }
        default:
            return state;
    }
}

export default formReducer;
