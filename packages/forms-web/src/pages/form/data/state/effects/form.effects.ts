import { Dispatch } from 'redux';
import { ActionType as DetailActionTypes, Action as DetailAction } from '../actions/form.actions';
import {getForm} from "../../../services/form-services";
import { TField } from '../../domain/IFormFields';


export const updateSectionField = (field: TField, sectionId: string) => {
    return async  (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.UPDATE_FORM_FIELD,
            payload: {field, sectionId}
        });
    }
}

export const findForm = () => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.QUERY_FORM_PENDING
        });
        try {
            const data = await getForm();
            dispatch({
                type: DetailActionTypes.QUERY_FORM_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.QUERY_FORM_FAIL,
                payload: err.message
            });
        }
    }
}
