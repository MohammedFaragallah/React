import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/actionTypes';
import { updateObject } from '../util';
const defaultState = {
  counter: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return updateObject(state, {
        counter: state.counter + 1,
      });
    case DECREMENT:
      return updateObject(state, {
        counter: state.counter - 1,
      });
    case ADD:
      return updateObject(state, {
        counter: state.counter + action.val,
      });
    case SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.val,
      });
    default:
      return state;
  }
};
