import { Action, ActionType } from '../actions/form.actions';
import { addSectionField } from "../../use-cases/use-add-section-field";
import { updateSectionField } from "../../use-cases/use-update-section-field";
import { IForm } from "../../domain/IForm";
import { v4 as uuidv4 } from 'uuid';
import { addSection } from "../../use-cases/use-add-section";
import {updateSectionName} from "../../use-cases/use-update-section-name";
import {updateSectionAccess} from "../../use-cases/use-update-section-access";
import {removeSectionField} from "../../use-cases/use-remove-section-field";
import {removeSection} from "../../use-cases/use-remove-section";

export interface IFormState {
    form: IForm;
    saveLoading: boolean;
    saveError: string | null;
    getLoading: boolean;
    getError: string | null;
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
    saveLoading: false,
    saveError: null,
    getLoading: false,
    getError: null
}

const formReducer = (state: IFormState = initialState, action: Action): IFormState => {
    switch (action.type) {
        case ActionType.SAVE_FORM_PENDING:
            return {
                ...state,
                saveLoading: true,
            }
        case ActionType.SAVE_FORM_SUCCESS:
            return {
                ...state,
                form: action.payload,
                saveLoading: false,
                saveError: null
            }
        case ActionType.SAVE_FORM_FAIL:
            return {
                ...state,
                saveLoading: false,
                saveError: action.payload,
            }
        case ActionType.GET_FORM_PENDING:
            return {
                ...state,
                getLoading: true,
            }
        case ActionType.GET_FORM_SUCCESS:
            return {
                ...state,
                form: action.payload,
                getLoading: false,
                getError: null
            }
        case ActionType.GET_FORM_FAIL:
            return {
                ...state,
                getLoading: false,
                getError: action.payload,
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
        case ActionType.REMOVE_SECTION_FIELD:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: removeSectionField(action.payload.sectionId, action.payload.fieldId, state.form.sections)
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
        case ActionType.REMOVE_SECTION:
            return {
                ...state,
                form: {
                    ...state.form,
                    sections: removeSection(action.payload, state.form.sections)
                }
            }
        default:
            return state;
    }
}

export default formReducer;
