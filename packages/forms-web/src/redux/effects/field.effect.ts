import axios from "axios";
import {Dispatch} from 'redux';
import {ActionType as FieldActionTypes, Action as FieldAction} from '../actions/field.actions';

const baseUrl = "http://localhost:5001";

export const findField = () => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FieldActionTypes.QUERY_FIELDS_PENDING
        });
        try {
            const {data} = await axios.get(`${baseUrl}/api/field`);
            dispatch({
                type: FieldActionTypes.QUERY_FIELDS_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FieldActionTypes.QUERY_FIELDS_FAIL,
                payload: err.message
            });
        }
    }
}
