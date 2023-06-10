import { Dispatch } from 'redux';
import { ActionType as FormActionTypes, Action as FieldAction } from '../actions/form.actions';
import { getFormFields } from "../../../services/fileld-services";

export const saveForm = () => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FormActionTypes.SAVE_FORM_PENDING
        });
        try {
            const data = await getFormFields();
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
