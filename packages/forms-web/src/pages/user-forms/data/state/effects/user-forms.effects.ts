import { Dispatch } from 'redux';
import { ActionType as DetailActionTypes, Action as DetailAction } from '../actions/user-forms.actions';
import { getUserForms } from "../../../services/user-forms-services";

export const findUserForms = () => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.QUERY_USER_FORMS_PENDING
        });
        try {
            const data = await getUserForms();
            dispatch({
                type: DetailActionTypes.QUERY_USER_FORMS_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.QUERY_USER_FORMS_FAIL,
                payload: err.message
            });
        }
    }
}
