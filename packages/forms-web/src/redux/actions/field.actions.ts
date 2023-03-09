// Hace falta crear las interfaces de los datos 

export enum ActionType {
    QUERY_FIELD_PENDING = 'QUERY_FIELD_PENDING',
    QUERY_FIELD_SUCCESS = 'QUERY_FIELD_SUCCESS',
    QUERY_FIELD_FAIL = 'QUERY_FIELD_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_FIELD_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_FIELD_SUCCESS;
    payload: any;
}

interface actionFail {
    type: ActionType.QUERY_FIELD_FAIL;
    payload: string; 
}

export type Action = actionPending | actionSuccess | actionFail;