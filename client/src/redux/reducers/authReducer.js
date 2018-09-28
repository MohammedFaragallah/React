import { FETCH_USER } from '../actions/actionTypes';
// import { updateObject } from '../util';

const defaultState = null;

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
