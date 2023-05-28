import {combineReducers} from 'redux';
import detailReducer from "./details.reducer";
import fieldReducer from './field.reducer';
import formReducer from './form.reducer';

const reducers = combineReducers({
    detail: detailReducer,
    form: formReducer,
    fieldForms: fieldReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
