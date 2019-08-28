import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(err => {
      console.log('error: ' + err);
    });
};

export const handleToken = token => dispatch => {
  axios
    .post('/api/stripe', token)
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(err => {
      console.log('error: ' + err);
    });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/emaily/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
