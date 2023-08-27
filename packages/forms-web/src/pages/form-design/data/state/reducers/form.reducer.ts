import { Action, ActionType } from '../actions/form.actions';
import { addSectionField } from "../../use-cases/use-add-section-field";
import { updateSectionField } from "../../use-cases/use-update-section-field";
import { IForm } from "../../domain/IForm";
import { v4 as uuidv4 } from 'uuid';
import { addSection } from "../../use-cases/use-add-section";
import {updateSectionName} from "../../use-cases/use-update-section-name";
import {updateSectionAccess} from "../../use-cases/use-update-section-access";

export interface IFormState {
    form: IForm;
    loading: boolean;
    error: string | null;
}

const initialState: IFormState = {
    form: {
        state: '',
        form_name: '',
        sections: [
            {
                id: uuidv4(),
                access: [],
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
        case ActionType.UPDATE_FORM_NAME:
            return {
                ...state,
                form: {
                    ...state.form,
                    form_name: action.payload
                }
            }
        case ActionType.ADD_SECTION_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: addSectionField(action.payload.sectionId, action.payload.field, state.form.sections)
                }
            }
        case ActionType.UPDATE_SECTION_ACCESS:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: updateSectionAccess(action.payload.sectionId, action.payload.access, state.form.sections)
                }
            }
        case ActionType.UPDATE_SECTION_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: updateSectionField(action.payload.sectionId, action.payload.field, state.form.sections)
                }
            }
        case ActionType.UPDATE_SECTION_NAME:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: updateSectionName(action.payload.sectionId, action.payload.name, state.form.sections)
                }
            }
        case ActionType.ADD_SECTION:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: addSection(action.payload, state.form.sections, initialState)
                }
            }
        default:
            return state;
    }
}

export default formReducer;
