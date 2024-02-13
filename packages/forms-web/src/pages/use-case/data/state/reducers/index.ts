import {combineReducers} from 'redux';
import formReducer from './form.reducer';

const formReducers = combineReducers({
    form: formReducer,
});

export default formReducers;
export type RootFormState = ReturnType<typeof formReducers>;
