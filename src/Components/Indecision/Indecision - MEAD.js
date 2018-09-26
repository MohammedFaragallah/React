// ============================================
// ============================================
// +=+=+=+=+=+=+= MEAD VERSION +=+=+=+=+=+=+=+=
// +=+=+=+=+=+=+= MEAD VERSION +=+=+=+=+=+=+=+=
// +=+=+=+=+=+=+= MEAD VERSION +=+=+=+=+=+=+=+=
// ============================================
// ============================================
// ++++++++++++++++++++++++++++++++++++++++++++

import React, { Component } from 'react';

class Indecision extends Component {
  state = {
    listItems: [],
  };

  componentDidUpdate() {
    const json = JSON.stringify(this.state);
    localStorage.setItem('IndecisionMEAD', json);
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.addItem(e);
    e.target.elements.option.value = '';
  };

  addItem = e => {
    const option = e.target.elements.option.value;
    if (!option) {
      return 'Enter valid value to add item';
    }
    if (this.state.listItems.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState(pre => ({ listItems: pre.listItems.concat(option) }));
  };

  // TODO repair remove one
  removeOption = index => {
    const state = [...this.state.listItems];
    state.splice(index, 1);
    this.setState({ listItems: state });
  };

  removeAllOption = () => {
    this.setState(() => ({
      listItems: [],
    }));
  };

  render() {
    return (
      <div className="item">
        <h3>hello from Indecision Component MEAD VERSION</h3>

        {this.state.listItems.map((item, index) => (
          <div key={item}>
            <li style={{ display: 'inline-block' }}>{item}</li>
            <button
              onClick={() => {
                this.removeOption(index);
              }}
              style={{ display: 'inline-block' }}
            >
              X
            </button>
          </div>
        ))}
        <form
          onSubmit={e => {
            this.onFormSubmit(e);
          }}
        >
          <input
            style={{ display: 'block', margin: '0 auto' }}
            type="text"
            name="option"
          />
          <button>Add Option</button>
          <button
            disabled={!this.state.listItems.length > 0}
            onClick={this.removeAllOption}
          >
            Remove All
          </button>
        </form>
      </div>
    );
  }
}

export default Indecision;
