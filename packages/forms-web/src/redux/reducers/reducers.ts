import {combineReducers} from 'redux';
import itemsReducer from './items.reducer';
import detailReducer from "./details.reducer";
import fieldReducer from './field.reducer';
import formReducer from './form.reducer';

const reducers = combineReducers({
    items: itemsReducer,
    detail: detailReducer,
    form: formReducer,
    fields: fieldReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
