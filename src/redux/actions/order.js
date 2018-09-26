import {
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_FAILED,
  PURCHASE_INIT,
  ORDERS_FETCH_START,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_FAILED,
} from './actionTypes';
import axios from '../../Components/BurgerBuilder/axios-orders';

const purchaseBurgerSuccess = (id, orderData) => ({
  type: PURCHASE_BURGER_SUCCESS,
  orderId: id,
  orderData,
});

const purchaseBurgerFail = error => ({
  type: PURCHASE_BURGER_FAILED,
  error,
});

const purchaseBurgerStart = () => ({
  type: PURCHASE_BURGER_START,
});

export const purchaseBurger = orderData => dispatch => {
  dispatch(purchaseBurgerStart());
  axios
    .post('/orders.json', orderData)
    .then(res => {
      dispatch(purchaseBurgerSuccess(res.data.name, orderData));
    })
    .catch(err => {
      dispatch(purchaseBurgerFail(err));
    });
};

export const purchaseInit = () => ({
  type: PURCHASE_INIT,
});

const ordersFetchStart = () => ({
  type: ORDERS_FETCH_START,
});
const ordersFetchSuccess = orders => ({
  type: ORDERS_FETCH_SUCCESS,
  orders,
});
const ordersFetchFailed = error => ({
  type: ORDERS_FETCH_FAILED,
  error,
});

export const fetchOrders = () => dispatch => {
  dispatch(ordersFetchStart());
  axios
    .get('/orders.json')
    .then(res => {
      const fetchedOrders = [];
      for (const Key in res.data) {
        fetchedOrders.push({
          ...res.data[Key],
          id: Key,
        });
      }
      dispatch(ordersFetchSuccess(fetchedOrders));
    })
    .catch(err => {
      dispatch(ordersFetchFailed(err));
    });
};
