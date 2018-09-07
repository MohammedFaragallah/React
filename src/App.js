import React, { Component } from 'react';

import './App.css';
import './Components/counter/counter';

// import CounterClass from './Components/counter/classCounter';
// import VtoggleClass from './Components/Vtoggle/classVtoggle';
// import Counter from './Components/counter/counter';
// import Indecision from './Components/Indecision/Indecision';
// import IndecisionMead from './Components/Indecision/Indecision - MEAD';
// import Vtoggle from './Components/Vtoggle/Vtoggle';
// import OptionModal from './Components/Modal';

import Routes from './Routers/AppRouter';

//TODO add random choice selection
class App extends Component {
  state = {
    Counter: {
      count: 0,
    },
    Vtoggle: {
      on: false,
    },
  };
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem('state'));
    if (data) {
      this.setState(pre => {
        return {
          Counter: {
            count: data.Counter.count || 0,
          },
          Vtoggle: {
            on: data.Vtoggle.on,
          },
        };
      });
    }
  }
  componentDidUpdate() {
    let json = JSON.stringify(this.state);
    localStorage.setItem('state', json);
  }

  addOne = () => {
    this.setState(pre => {
      return {
        Counter: { count: pre.Counter.count + 1 },
      };
    });
  };

  minusOne = () => {
    this.setState(pre => {
      return {
        Counter: { count: pre.Counter.count - 1 },
      };
    });
  };

  reset = () => {
    this.setState(pre => {
      return {
        Counter: { count: 0 },
      };
    });
  };

  vtoggle = () => {
    this.setState(pre => {
      return { Vtoggle: { on: !pre.Vtoggle.on } };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello from app.js</h1>
        <Routes />
        {/* <div className="section">
          <Counter
            count={`Count : ${this.state.Counter.count}`}
            addOne={this.addOne}
            minusOne={this.minusOne}
            reset={this.reset}
          />
          <CounterClass />
        </div>
        <div className="section">
          <Vtoggle click={this.vtoggle} on={this.state.Vtoggle.on} />
          <VtoggleClass />
        </div>
        <Indecision />
        <IndecisionMead />
        <OptionModal /> */}
      </div>
    );
  }
}

export default App;
