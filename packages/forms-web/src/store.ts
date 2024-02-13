import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formDesignReducer from "./pages/form-design/data/state/reducers/index";
import formReducer from "./pages/use-case/data/state/reducers/index";
import loginReducer from "./pages/login/data/state/reducers/index";
import userFormsReducers from "./pages/user-forms/data/state/reducers/index";

const reducers = combineReducers({
    formDesign: formDesignReducer,
    form: formReducer,
    login: loginReducer,
    userForms: userFormsReducers
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
export type RootState = ReturnType<typeof reducers>;
