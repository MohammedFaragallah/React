import {
  PURCHASE_BURGER_FAILED,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_START,
  PURCHASE_INIT,
  ORDERS_FETCH_START,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_FAILED,
} from '../actions/actionTypes';
import { updateObject } from '../util';

const defaultState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = state =>
  updateObject(state, {
    purchased: false,
  });

const purchaseBurgerStart = state =>
  updateObject(state, {
    loading: true,
  });

const purchaseBurgerSuccess = (state, action) =>
  updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(
      updateObject(action.orderData, {
        id: action.orderId,
      })
    ),
  });

const purchaseBurgerFailed = state =>
  updateObject(state, {
    loading: false,
  });

const ordersFetchStart = state =>
  updateObject(state, {
    loading: true,
  });

const ordersFetchSuccess = (state, action) =>
  updateObject(state, {
    orders: action.orders,
    loading: false,
  });

const ordersFetchFailed = (state, action) =>
  updateObject(state, {
    loading: false,
  });

export default (state = defaultState, action) => {
  switch (action.type) {
    case PURCHASE_INIT:
      return purchaseInit(state);
    case PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case PURCHASE_BURGER_FAILED:
      return purchaseBurgerFailed(state, action);
    case ORDERS_FETCH_START:
      return ordersFetchStart(state);
    case ORDERS_FETCH_SUCCESS:
      return ordersFetchSuccess(state, action);
    case ORDERS_FETCH_FAILED:
      return ordersFetchFailed(state, action);
    default:
      return state;
  }
};
