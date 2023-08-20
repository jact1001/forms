import {Action, ActionType} from '../actions/users.actions';
import {IUser} from "../../domain/IUser";

export interface IUsersState {
    users: IUser[] | null ;
    loading: boolean;
    error: string | null;
}

const initialState: IUsersState = {
    users: null,
    loading: false,
    error: null
}

const usersReducer = (state: IUsersState = initialState, action: Action): IUsersState => {
    switch (action.type) {
        case ActionType.QUERY_USERS_PENDING:
            return {
                loading: true,
                users: null,
                error: null
            }
        case ActionType.QUERY_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: null
            }
        case ActionType.QUERY_USERS_FAIL:
            return {
                loading: false,
                error: action.payload,
                users: null
            }
        default:
            return state;
    }
}

export default usersReducer;
