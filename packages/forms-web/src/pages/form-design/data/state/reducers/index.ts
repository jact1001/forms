import {combineReducers} from 'redux';
import formFieldsReducer from './form-fields.reducer';
import formReducer from "./form.reducer";

const formDesignReducer = combineReducers({
    formFields: formFieldsReducer,
    form: formReducer
});

export default formDesignReducer;
export type RootDesignFormState = ReturnType<typeof formDesignReducer>;
