import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes/AppRouter';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './redux/actions/expenses';
import storeConfigurations from './redux/Redux-store/store';

const store = storeConfigurations();

store.dispatch(startSetExpenses()).then(() => {});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

//TODO add random choice selection
class App extends Component {
  render() {
    const jsx = (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
    return (
      <div className="App">
        <h1>Hello from app.js</h1>
        {jsx}
      </div>
    );
  }
}
export default App;
