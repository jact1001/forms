import axios from "axios";
import {Dispatch} from 'redux';
import {ActionType as FieldActionTypes, Action as FieldAction} from '../actions/field.actions';

const baseUrl = "http://localhost:5000";

export const findField = () => {
    return async  (dispatch: Dispatch<FieldAction>) => {
        dispatch({
            type: FieldActionTypes.QUERY_FIELD_PENDING
        });
        try {
            const {data} = await axios.get(`${baseUrl}/api/field`);
            dispatch({
                type: FieldActionTypes.QUERY_FIELD_SUCCESS,
                payload: data
            });
        } catch (err: any) {
            dispatch({
                type: FieldActionTypes.QUERY_FIELD_FAIL,
                payload: err.message
            });
        }
    }
}