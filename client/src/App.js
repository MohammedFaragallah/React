import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes/AppRouter';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './redux/actions/expenses';
import storeConfigurations from './redux/store/store';
import axios from 'axios';
window.axios = axios;
const store = storeConfigurations();

store.dispatch(startSetExpenses()).then(() => {});

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
