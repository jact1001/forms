import { Dispatch } from 'redux';
import { ActionType as FormFieldsActionTypes, Action as FormFieldsAction } from '../actions/form-fields.actions';
import { getFormFields } from "../../../services/fileld-services";

export const findFormFields = () => {
    return async  (dispatch: Dispatch<FormFieldsAction>) => {
        dispatch({
            type: FormFieldsActionTypes.QUERY_FIELDS_PENDING
        });
        try {
            const data = await getFormFields();
            dispatch({
                type: FormFieldsActionTypes.QUERY_FIELDS_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FormFieldsActionTypes.QUERY_FIELDS_FAIL,
                payload: err.message
            });
        }
    }
}
