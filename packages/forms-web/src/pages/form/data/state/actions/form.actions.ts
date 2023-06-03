export enum ActionType {
    QUERY_FORM_PENDING = 'QUERY_FORM_PENDING',
    QUERY_FORM_SUCCESS = 'QUERY_FORM_SUCCESS',
    QUERY_FORM_FAIL = 'QUERY_FORM_FAIL'
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

export type Action = actionPending | actionSuccess | actionFail;
