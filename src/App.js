import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes/AppRouter';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './redux/actions/expenses';
import storeConfigurations from './redux/store/store';

const store = storeConfigurations();

store.dispatch(startSetExpenses()).then(() => {});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}
export default App;
