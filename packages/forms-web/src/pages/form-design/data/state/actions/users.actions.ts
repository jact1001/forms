import { IUser } from "../../domain/IUser";

export enum ActionType {
    QUERY_USERS_PENDING = 'QUERY_USERS_PENDING',
    QUERY_USERS_SUCCESS = 'QUERY_USERS_SUCCESS',
    QUERY_USERS_FAIL = 'QUERY_USERS_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_USERS_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_USERS_SUCCESS;
    payload: IUser[];
}

interface actionFail {
    type: ActionType.QUERY_USERS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
