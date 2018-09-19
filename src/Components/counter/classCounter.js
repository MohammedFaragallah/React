import React, { Component } from 'react';

class CounterClass extends Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(pre => {
      return {
        count: pre.count + 1,
      };
    });
  };

  minusOne = () => {
    this.setState(pre => {
      return {
        count: pre.count - 1,
      };
    });
  };

  reset = () => {
    this.setState(pre => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div className="item">
        <h3>hello from Counter Class Component</h3>
        <p>Count : {this.state.count}</p>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CounterClass;
