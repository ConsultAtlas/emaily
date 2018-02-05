import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // we use this 'as' syntax so that its not confusing having 'reducer' floating around everywhere.
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
});