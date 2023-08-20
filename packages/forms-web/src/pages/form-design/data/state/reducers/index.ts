import {combineReducers} from 'redux';
import formFieldsReducer from './form-fields.reducer';
import formReducer from "./form.reducer";
import usersReducer from "./users.reducer";

const formDesignReducer = combineReducers({
    formFields: formFieldsReducer,
    form: formReducer,
    users: usersReducer
});

export default formDesignReducer;
export type RootDesignFormState = ReturnType<typeof formDesignReducer>;
