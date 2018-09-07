import React from 'react';

const vtoogle = props => {
  return (
    <div className="item">
      <h3>hello from Vtoggle Function Component</h3>
      <button onClick={props.click}>toogler</button>
      {props.on && <p>some text to toogle state</p>}
    </div>
  );
};

export default vtoogle;
