import { Dispatch } from 'redux';
import { ActionType as UserFormsActionTypes, Action as DetailAction } from '../actions/user-forms.actions';
import { createUseCase, download, getUserForms } from "../../../services/user-forms-services";
import { ICase } from "../../domain/ICase";

export const findUserForms = () => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: UserFormsActionTypes.QUERY_USER_FORMS_PENDING
        });
        try {
            const data = await getUserForms();
            dispatch({
                type: UserFormsActionTypes.QUERY_USER_FORMS_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            console.log('error', err);
            dispatch({
                type: UserFormsActionTypes.QUERY_USER_FORMS_FAIL,
                payload: err.message
            });
        }
    }
}

export const downloadUserForm = (formId: string) => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: UserFormsActionTypes.DOWNLOAD_USER_FORMS_PENDING
        });
        try {
            const data = await download(formId);
            dispatch({
                type: UserFormsActionTypes.DOWNLOAD_USER_FORMS_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            console.log('error', err);
            dispatch({
                type: UserFormsActionTypes.DOWNLOAD_USER_FORMS_FAIL,
                payload: err.message
            });
        }
    }
}

export const addUseCase = (useCase: ICase) => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: UserFormsActionTypes.CREATE_USE_CASE_PENDING
        });
        try {
            const data = await createUseCase(useCase);
            dispatch({
                type: UserFormsActionTypes.CREATE_USE_CASE_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: UserFormsActionTypes.CREATE_USE_CASE_FAIL,
                payload: err.message
            });
        }
    }
}
