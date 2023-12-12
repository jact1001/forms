export enum ActionType {
    QUERY_USER_FORMS_PENDING = 'QUERY_USER_FORMS_PENDING',
    QUERY_USER_FORMS_SUCCESS = 'QUERY_USER_FORMS_SUCCESS',
    QUERY_USER_FORMS_FAIL = 'QUERY_USER_FORMS_FAIL',
    CREATE_USE_CASE_PENDING = 'CREATE_USE_CASE_PENDING',
    CREATE_USE_CASE_SUCCESS = 'CREATE_USE_CASE_SUCCESS',
    CREATE_USE_CASE_FAIL = 'CREATE_USE_CASE_FAIL',
    DOWNLOAD_USER_FORMS_PENDING = 'DOWNLOAD_USER_FORMS_PENDING',
    DOWNLOAD_USER_FORMS_SUCCESS = 'DOWNLOAD_USER_FORMS_SUCCESS',
    DOWNLOAD_USER_FORMS_FAIL = 'DOWNLOAD_USER_FORMS_FAIL',
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

interface createCaseActionPending {
    type: ActionType.CREATE_USE_CASE_PENDING;
}

interface createCaseActionSuccess {
    type: ActionType.CREATE_USE_CASE_SUCCESS;
    payload: any;
}

interface createCaseActionFail {
    type: ActionType.CREATE_USE_CASE_FAIL;
    payload: string;
}

interface downloadActionPending {
    type: ActionType.DOWNLOAD_USER_FORMS_PENDING;
}

interface downloadActionSuccess {
    type: ActionType.DOWNLOAD_USER_FORMS_SUCCESS;
    payload: any;
}

interface downloadActionFail {
    type: ActionType.DOWNLOAD_USER_FORMS_FAIL;
    payload: string;
}

export type Action =
    actionPending |
    actionSuccess |
    actionFail |
    createCaseActionPending |
    createCaseActionSuccess |
    createCaseActionFail |
    downloadActionPending |
    downloadActionSuccess |
    downloadActionFail;
