import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType as DetailActionTypes, Action as DetailAction} from '../actions/detail.actions';

const baseUrl = "http://localhost:5000";

export const findItem = (id: string) => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.QUERY_DETAIL_PENDING
        });
        try {
            const {data} = await axios.get(`${baseUrl}/api/items/${id}`);
            dispatch({
                type: DetailActionTypes.QUERY_DETAIL_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.QUERY_DETAIL_FAIL,
                payload: err.message
            });
        }
    }
}
