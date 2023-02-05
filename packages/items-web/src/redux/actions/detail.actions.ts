import {IItem} from "../../shared/models/iitem-detail";

export enum ActionType {
    QUERY_DETAIL_PENDING = 'QUERY_DETAIL_PENDING',
    QUERY_DETAIL_SUCCESS = 'QUERY_DETAIL_SUCCESS',
    QUERY_DETAIL_FAIL = 'QUERY_DETAIL_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_DETAIL_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_DETAIL_SUCCESS;
    payload: IItem;
}

interface actionFail {
    type: ActionType.QUERY_DETAIL_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
