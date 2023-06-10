export enum ActionType {
    SAVE_FORM_PENDING = 'SAVE_FORM_PENDING',
    SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
    SAVE_FORM_FAIL = 'SAVE_FORM_FAIL',
    UPDATE_FORM = 'UPDATE_FORM'
}

interface actionPending {
    type: ActionType.SAVE_FORM_PENDING;
}

interface actionSuccess {
    type: ActionType.SAVE_FORM_SUCCESS;
    payload: any;
}

interface actionFail {
    type: ActionType.SAVE_FORM_FAIL;
    payload: string;
}

interface updateAction {
    type: ActionType.UPDATE_FORM;
    payload: any;
}

export type Action = actionPending | actionSuccess | actionFail | updateAction;
