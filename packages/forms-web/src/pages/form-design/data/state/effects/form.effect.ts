import { Dispatch } from 'redux';
import { ActionType as FormActionTypes, Action as FieldAction } from '../actions/form.actions';
import {getFormService, saveFormService} from "../../../services/form-services";
import { IAccess, IForm } from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";

export const saveForm = (form: IForm) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.ACTION_FORM_PENDING
        });
        try {
            const data = await saveFormService(form);
            dispatch({
                type: FormActionTypes.ACTION_FORM_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FormActionTypes.ACTION_FORM_FAIL,
                payload: err.message
            });
        }
    }
}

export const getFormById = (formId: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.ACTION_FORM_PENDING
        });
        try {
            const data = await getFormService(formId);
            dispatch({
                type: FormActionTypes.ACTION_FORM_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FormActionTypes.ACTION_FORM_FAIL,
                payload: err.message
            });
        }
    }
}

export const updateFormName = (name: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.UPDATE_FORM_NAME,
            payload: name
        });
    }
}

export const addSectionField = (field: TField, sectionId: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.ADD_SECTION_FIELD,
            payload: {field, sectionId}
        });
    }
}

export const updateSectionAccess = (access: IAccess[], sectionId: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.UPDATE_SECTION_ACCESS,
            payload: {access, sectionId}
        });
    }
}

export const updateSectionField = (field: TField, sectionId: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.UPDATE_SECTION_FIELD,
            payload: {field, sectionId}
        });
    }
}

export const updateSectionName = (name: string, sectionId: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.UPDATE_SECTION_NAME,
            payload: {name, sectionId}
        });
    }
}

export const addSection = (id: string) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.ADD_SECTION,
            payload: id
        });
    }
}
