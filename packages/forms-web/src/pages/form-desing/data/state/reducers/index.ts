import {combineReducers} from 'redux';
import fieldReducer from './field.reducer';

const formDesingReducer = combineReducers({
    formFields: fieldReducer
});

export default formDesingReducer;
export type RootDesignFormState = ReturnType<typeof formDesingReducer>;
