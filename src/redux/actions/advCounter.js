import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT,
} from './actionTypes';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const add = value => ({
  type: ADD,
  val: value,
});

export const subtract = value => ({
  type: SUBTRACT,
  val: value,
});

export const storeResult = result => ({
  type: STORE_RESULT,
  result,
});

export const deleteResult = id => ({
  type: DELETE_RESULT,
  resultElId: id,
});
