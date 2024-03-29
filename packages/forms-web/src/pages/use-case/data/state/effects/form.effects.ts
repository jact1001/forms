import { Dispatch } from 'redux';
import { ActionType as DetailActionTypes, Action as DetailAction } from '../actions/form.actions';
import { getUseCase, updateUseCaseService } from "../../../services/form-services";
import { TField } from '../../domain/IFormFields';
import { IUseCase } from '../../domain/IUseCase';

const USE_CASE_STORAGE_KEY = 'use-case-storage';

export const updateSectionField = (field: TField, sectionId: string) => {
    return async  (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.UPDATE_FORM_FIELD,
            payload: {field, sectionId}
        });
    }
}

export const findUseCase = (caseId: string) => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.QUERY_FORM_PENDING
        });
        try {
            const storedData = localStorage.getItem(USE_CASE_STORAGE_KEY+caseId);
            const newData = storedData ? JSON.parse(storedData) : null;
            const data = newData || (await getUseCase(caseId));
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

export const updateUseCase = (form: IUseCase) => {
    return async  (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.UPDATE_FORM_PENDING
        });
        try {
            const data = await updateUseCaseService(form);
            dispatch({
                type: DetailActionTypes.UPDATE_FORM_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.UPDATE_FORM_FAIL,
                payload: err.message
            });
        }
    }
}
