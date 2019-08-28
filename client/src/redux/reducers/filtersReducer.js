import moment from 'moment';
import {
  SET_TEXT,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE,
} from '../actions/actionTypes';

const defaultState = {
  text: '',
  sortBY: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount',
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
