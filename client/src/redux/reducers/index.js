import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import burgerReducer from './burgerReducer';
import counterReducer from './counterReducer';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';
import orderReducer from './orderReducer';
import resultReducer from './resultReducer';

export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  burger: burgerReducer,
  orders: orderReducer,
  ctr: counterReducer,
  res: resultReducer,
  auth: authReducer,
  form: reduxForm,
});
