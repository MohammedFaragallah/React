import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes/AppRouter';
import { store } from './cases';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// Cases();

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
