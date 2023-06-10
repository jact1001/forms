import { Dispatch } from 'redux';
import { ActionType as FieldActionTypes, Action as FieldAction } from '../actions/field.actions';
import { getFormFields } from "../../../services/fileld-services";

export const findField = () => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FieldActionTypes.QUERY_FIELDS_PENDING
        });
        try {
            const data = await getFormFields();
            dispatch({
                type: FieldActionTypes.QUERY_FIELDS_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FieldActionTypes.QUERY_FIELDS_FAIL,
                payload: err.message
            });
        }
    }
}
