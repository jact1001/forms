export enum ActionType {
    QUERY_USER_FORMS_PENDING = 'QUERY_USER_FORMS_PENDING',
    QUERY_USER_FORMS_SUCCESS = 'QUERY_USER_FORMS_SUCCESS',
    QUERY_USER_FORMS_FAIL = 'QUERY_USER_FORMS_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_USER_FORMS_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_USER_FORMS_SUCCESS;
    payload: any;
}

interface actionFail {
    type: ActionType.QUERY_USER_FORMS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
