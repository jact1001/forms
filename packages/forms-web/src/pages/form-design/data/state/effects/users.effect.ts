import { Dispatch } from 'redux';
import { ActionType as UsersActionTypes, Action as UserActions } from '../actions/users.actions';
import { getUsersService } from "../../../services/users-services";

export const findUsers = () => {
    return async  (dispatch: Dispatch<UserActions>) => {
        dispatch({
            type: UsersActionTypes.QUERY_USERS_PENDING
        });
        try {
            const data = await getUsersService();
            dispatch({
                type: UsersActionTypes.QUERY_USERS_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: UsersActionTypes.QUERY_USERS_FAIL,
                payload: err.message
            });
        }
    }
}
