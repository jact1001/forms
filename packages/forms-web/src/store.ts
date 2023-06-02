import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import designFormReducer from "./pages/design-form/data/state/reducers/index";
import formReducer from "./pages/form/data/state/reducers/index";

const reducers = combineReducers({
    designForm: designFormReducer,
    form: formReducer
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
export type RootState = ReturnType<typeof reducers>;
