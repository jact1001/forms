import {Action, ActionType} from '../actions/detail.actions';
import {IItem} from "../../shared/models/iitem-detail";

interface State {
    detail: IItem | null;
    loading: boolean;
    error: string | null;
}

const initialState = {
    detail: null,
    loading: false,
    error: null
}

const detailReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_DETAIL_PENDING:
            return {
                loading: true,
                detail: null,
                error: null
            }
        case ActionType.QUERY_DETAIL_SUCCESS:
            return {
                loading: false,
                detail: action.payload,
                error: null
            }
        case ActionType.QUERY_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload,
                detail: null
            }
        default:
            return state;
    }
}

export default detailReducer;
