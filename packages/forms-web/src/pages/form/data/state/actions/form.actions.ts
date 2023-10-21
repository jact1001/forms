import { TField } from "../../domain/IFormFields";

export enum ActionType {
    QUERY_FORM_PENDING = 'QUERY_FORM_PENDING',
    QUERY_FORM_SUCCESS = 'QUERY_FORM_SUCCESS',
    QUERY_FORM_FAIL = 'QUERY_FORM_FAIL',
    UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD'
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

export type Action = actionPending | actionSuccess | actionFail | actionUpdateFormField;
