import { Dispatch } from 'redux';
import { ActionType as DetailActionTypes, Action as DetailAction } from '../actions/form.actions';
//import { ActionType as FormActionTypes, Action as FieldAction } from '../actions/form.actions';
//import {getFormService, saveFormService, updateFormService} from "../../../services/form-services";
import { getUseCase, updateUseCaseService } from "../../../services/form-services";
import { TField } from '../../domain/IFormFields';
import { IForm } from '../../domain/IForm';

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
            const data = await getUseCase(caseId);
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

export const updateUseCase = (form: IForm) => {
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
