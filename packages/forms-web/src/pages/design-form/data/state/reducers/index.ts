import {combineReducers} from 'redux';
import fieldReducer from './field.reducer';

const designFormReducers = combineReducers({
    formFields: fieldReducer
});

export default designFormReducers;
export type RootDesignFormState = ReturnType<typeof designFormReducers>;
