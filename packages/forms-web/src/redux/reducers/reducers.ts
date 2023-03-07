import {combineReducers} from 'redux';
import itemsReducer from './items.reducer';
import detailReducer from "./details.reducer";
import formReducer from './form.reducer';

const reducers = combineReducers({
    items: itemsReducer,
    detail: detailReducer,
    form: formReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
