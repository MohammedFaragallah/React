import React, { Component } from 'react';
//TODO add random choice selection

class Indecision extends Component {
  state = {
    listItems: [],
  };
  componentDidUpdate() {
    let json = JSON.stringify(this.state);
    localStorage.setItem('Indecision', json);
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.addItem(e);
    e.target.elements.option.value = '';
  };

  addItem = e => {
    const option = e.target.elements.option.value;
    if (option.trim()) {
      const state = [...this.state.listItems];
      state.push(option);
      this.setState({ listItems: state });
    } else {
      console.log('no input !!');
    }
  };

  removeOption = index => {
    const state = [...this.state.listItems];
    state.splice(index, 1);
    this.setState({ listItems: state });
  };

  removeAllOption = () => {
    this.setState({ listItems: [] });
  };

  render() {
    return (
      <div className="item">
        <h3>hello from Indecision Component</h3>
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
