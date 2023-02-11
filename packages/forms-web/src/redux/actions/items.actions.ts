import {IItemList} from "../../shared/models/iitems-list";

export enum ActionType {
    QUERY_ITEMS_PENDING = 'QUERY_ITEMS_PENDING',
    QUERY_ITEMS_SUCCESS = 'QUERY_ITEMS_SUCCESS',
    QUERY_ITEMS_FAIL = 'QUERY_ITEMS_FAIL'
}

interface actionPending {
    type: ActionType.QUERY_ITEMS_PENDING;
}

interface actionSuccess {
    type: ActionType.QUERY_ITEMS_SUCCESS;
    payload: IItemList;
}

interface actionFail {
    type: ActionType.QUERY_ITEMS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
