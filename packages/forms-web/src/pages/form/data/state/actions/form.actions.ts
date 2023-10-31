import { IForm } from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";

export enum ActionType {
    UPDATE_FORM_PENDING = 'UPDATE_FORM_PENDING',
    UPDATE_FORM_SUCCESS = 'UPDATE_FORM_SUCCESS',
    UPDATE_FORM_FAIL = 'UPDATE_FORM_FAIL',
    QUERY_FORM_PENDING = 'QUERY_FORM_PENDING',
    QUERY_FORM_SUCCESS = 'QUERY_FORM_SUCCESS',
    QUERY_FORM_FAIL = 'QUERY_FORM_FAIL',
    UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD'
}

interface updateActionPending {
    type: ActionType.UPDATE_FORM_PENDING;
}

interface updateActionSuccess {
    type: ActionType.UPDATE_FORM_SUCCESS;
    payload: IForm;
}

interface updateActionFail {
    type: ActionType.UPDATE_FORM_FAIL;
    payload: string;
}

interface actionPending {
    type: ActionType.QUERY_FORM_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_FORM_SUCCESS;
    payload: any;
}

interface actionFail {
    type: ActionType.QUERY_FORM_FAIL;
    payload: string;
}

interface actionUpdateFormField {
    type: ActionType.UPDATE_FORM_FIELD;
    payload: {sectionId:string, field: TField};
}

export type Action = 
    updateActionPending |
    updateActionSuccess |
    updateActionFail |
    actionPending | 
    actionSuccess | 
    actionFail | 
    actionUpdateFormField;
