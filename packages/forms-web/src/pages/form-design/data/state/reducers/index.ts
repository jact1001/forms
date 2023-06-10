import {combineReducers} from 'redux';
import fieldReducer from './field.reducer';

const formDesignReducer = combineReducers({
    formFields: fieldReducer
});

export default formDesignReducer;
export type RootDesignFormState = ReturnType<typeof formDesignReducer>;
