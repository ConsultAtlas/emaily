//SurveyFormReview shows users their form for review.
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    
    return (
        <div>
            <h5>Please review your entries.</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)} //add arrow function so the JS doenst automaticly execute the function but waits for the onClick.
                className="green btn-flat white-text right"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    
    return {  formValues: state.form.surveyForm.values  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));