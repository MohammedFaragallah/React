import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';
import burgerReducer from '../reducers/burgerReducer';
import counterReducer from '../reducers/counterReducer';
import resultReducer from '../reducers/resultReducer';
import orderReducer from '../reducers/orderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      burger: burgerReducer,
      orders: orderReducer,
      ctr: counterReducer,
      res: resultReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
