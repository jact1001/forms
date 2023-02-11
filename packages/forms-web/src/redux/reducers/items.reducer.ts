import {Action, ActionType} from '../actions/items.actions';
import {IItemList} from "../../shared/models/iitems-list";

interface State {
    items: IItemList | null;
    loading: boolean;
    error: string | null;
}

const initialState = {
    items: null,
    loading: false,
    error: null
}

const itemsReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.QUERY_ITEMS_PENDING:
            return {
                loading: true,
                items: null,
                error: null
            }
        case ActionType.QUERY_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: null
            }
        case ActionType.QUERY_ITEMS_FAIL:
            return {
                loading: false,
                error: action.payload,
                items: null
            }
        default:
            return state;
    }
}

export default itemsReducer;
