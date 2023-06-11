import { Dispatch } from 'redux';
import { ActionType as FormActionTypes, Action as FieldAction } from '../actions/form.actions';
import { saveFormService } from "../../../services/form-services";

export const saveForm = (form: any) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.SAVE_FORM_PENDING
        });
        try {
            const data = await saveFormService(form);
            dispatch({
                type: FormActionTypes.SAVE_FORM_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FormActionTypes.SAVE_FORM_FAIL,
                payload: err.message
            });
        }
    }
}

export const updateFieldForm = (field: any) => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.UPDATE_FIELD_FORM,
            payload: field
        });
    }
}
