import {combineReducers} from 'redux';
import fieldReducer from './field.reducer';
import formReducer from "./form.reducer";

const formDesignReducer = combineReducers({
    formFields: fieldReducer,
    form: formReducer
});

export default formDesignReducer;
export type RootDesignFormState = ReturnType<typeof formDesignReducer>;
