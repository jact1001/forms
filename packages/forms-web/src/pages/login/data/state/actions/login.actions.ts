export enum ActionType {
    LOGIN_PENDING = 'LOGIN_PENDING',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGOUT_PENDING = 'LOGOUT_PENDING',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAIL = 'LOGOUT_FAIL',
    SET_ACCESS_DENIED = 'SET_ACCESS_DENIED',
    SET_ACCESS_ACCEPTED = 'SET_ACCESS_ACCEPTED'
}

interface loginActionPending {
    type: ActionType.LOGIN_PENDING;
}

interface loginActionSuccess {
    type: ActionType.LOGIN_SUCCESS;
    payload: any;
}

interface loginActionFail {
    type: ActionType.LOGIN_FAIL;
    payload: string;
}

interface logoutActionPending {
    type: ActionType.LOGOUT_PENDING;
}

interface logoutActionSuccess {
    type: ActionType.LOGOUT_SUCCESS;
    payload: any;
}

interface logoutActionFail {
    type: ActionType.LOGOUT_FAIL;
    payload: string;
}

interface setAccessDenied {
    type: ActionType.SET_ACCESS_DENIED;
};

interface setAccessAccepted {
    type: ActionType.SET_ACCESS_ACCEPTED;
};

export type Action =
    loginActionPending |
    loginActionSuccess |
    loginActionFail |
    logoutActionPending |
    logoutActionSuccess |
    logoutActionFail |
    setAccessDenied |
    setAccessAccepted;
