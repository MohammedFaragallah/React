import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensesreducer';
import filtersReducer from '../reducers/filtersReducer';
import burgerReducer from '../reducers/burgerReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      burger: burgerReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
