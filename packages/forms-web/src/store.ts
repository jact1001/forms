import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formDesingReducer from "./pages/form-desing/data/state/reducers/index";
import formReducer from "./pages/form/data/state/reducers/index";

const reducers = combineReducers({
    formDesing: formDesingReducer,
    form: formReducer
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
export type RootState = ReturnType<typeof reducers>;
