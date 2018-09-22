import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expensesreducer';
import filtersReducer from '../reducers/filtersReducer';
import burgerReducer from '../reducers/burgerReducer';
import counterReducer from '../reducers/counterReducer';
import resultReducer from '../reducers/resultReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      burger: burgerReducer,
      ctr: counterReducer,
      res: resultReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
