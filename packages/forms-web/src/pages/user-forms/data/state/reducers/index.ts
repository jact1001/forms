import {combineReducers} from 'redux';
import userFormsReducer from './user-forms.reducer';

const formReducers = combineReducers({
    form: userFormsReducer,
});

export default formReducers;
export type RootFormState = ReturnType<typeof formReducers>;
