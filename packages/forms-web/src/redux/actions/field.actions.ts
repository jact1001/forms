// Hace falta crear las interfaces de los datos

export enum ActionType {
    QUERY_FIELDS_PENDING = 'QUERY_FIELDS_PENDING',
    QUERY_FIELDS_SUCCESS = 'QUERY_FIELDS_SUCCESS',
    QUERY_FIELDS_FAIL = 'QUERY_FIELDS_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_FIELDS_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_FIELDS_SUCCESS;
    payload: any;
}

interface actionFail {
    type: ActionType.QUERY_FIELDS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
