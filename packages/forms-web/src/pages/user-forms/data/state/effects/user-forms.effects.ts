import { Dispatch } from 'redux';
import { ActionType as DetailActionTypes, Action as DetailAction } from '../actions/user-forms.actions';
import {createUseCase, getUserForms} from "../../../services/user-forms-services";
import { IFormCase } from "../../domain/IUserForms";

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
            console.log('error', err);
            dispatch({
                type: DetailActionTypes.QUERY_USER_FORMS_FAIL,
                payload: err.message
            });
        }
    }
}

export const addUseCase = (useCase: IFormCase, formId: string) => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.CREATE_USE_CASE_PENDING
        });
        try {
            const data = await createUseCase(useCase, formId);
            dispatch({
                type: DetailActionTypes.CREATE_USE_CASE_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.CREATE_USE_CASE_FAIL,
                payload: err.message
            });
        }
    }
}
