import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT,
} from './actionTypes';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = value => {
  return {
    type: ADD,
    val: value,
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    val: value,
  };
};

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id,
  };
};
