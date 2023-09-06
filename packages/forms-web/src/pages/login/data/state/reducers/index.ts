import {combineReducers} from 'redux';
import loginReducer from './login.reducer';

const loginReducers = combineReducers({
    login: loginReducer,
});

export default loginReducers;
export type RootFormState = ReturnType<typeof loginReducers>;
