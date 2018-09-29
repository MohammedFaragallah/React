import React from 'react';

const Counter = props => (
  <div className="item">
    <h3>hello from Counter Function Component</h3>
    <p>{props.count}</p>
    <button onClick={props.addOne}>+1</button>
    <button onClick={props.minusOne}>-1</button>
    <button onClick={props.reset}>Reset</button>
  </div>
);

export default Counter;
