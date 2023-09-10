import {combineReducers} from 'redux';
import userFormsReducer from './user-forms.reducer';

const userFormsReducers = combineReducers({
    userForms: userFormsReducer,
});

export default userFormsReducers;
export type RootUserFormsState = ReturnType<typeof userFormsReducers>;
