import {combineReducers} from 'redux';
import itemsReducer from './items.reducer';
import detailReducer from "./details.reducer";

const reducers = combineReducers({
    items: itemsReducer,
    detail: detailReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
