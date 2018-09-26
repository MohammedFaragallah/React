import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';
import { updateObject } from '../util';

const defaultState = {
  results: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      });
    case DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};
