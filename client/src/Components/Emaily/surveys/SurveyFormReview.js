import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../../redux/actions/auth';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitSurvey(formValues, history)}>
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
