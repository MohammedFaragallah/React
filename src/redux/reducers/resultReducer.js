import * as actionTypes from '../actions/advCounter';

const defaultState = {
  results: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
