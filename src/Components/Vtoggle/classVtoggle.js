import React, { Component } from 'react';

class VtoggleClass extends Component {
  state = {
    on: true,
  };

  vtoggle = () => {
    this.setState(pre => {
      return { on: !pre.on };
    });
  };

  render() {
    return (
      <div className="item">
        <h3>hello from Vtoggle Class Component</h3>
        <button onClick={this.vtoggle}>{this.state.on ? 'OFF' : 'ON'}</button>
        {this.state.on && <p>some text to toogle state</p>}
      </div>
    );
  }
}

export default VtoggleClass;
