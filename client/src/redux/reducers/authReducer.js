import { FETCH_USER } from '../actions/actionTypes';

const defaultState = null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
