import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType as DetailActionTypes, Action as DetailAction} from '../actions/form.actions';

const baseUrl = "http://localhost:5001/";

export const findForm = () => {
    return async (dispatch: Dispatch<DetailAction>) => {
        dispatch({
            type: DetailActionTypes.QUERY_FORM_PENDING
        });
        try {
            const {data} = await axios.get(`${baseUrl}api/form`);
            dispatch({
                type: DetailActionTypes.QUERY_FORM_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: DetailActionTypes.QUERY_FORM_FAIL,
                payload: err.message
            });
        }
    }
}