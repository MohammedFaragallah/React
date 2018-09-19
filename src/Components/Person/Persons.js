import React, { Component } from 'react';
import Person from './Person';
// eslint-disable-next-line
import uuid from 'uuid';
export class Persons extends Component {
  state = {
    persons: [
      { id: 'asd15', name: 'Max', age: 28 },
      { id: 'asd16', name: 'Manu', age: 29 },
      { id: 'asd17', name: 'Stephanie', age: 26 },
    ],
    showPersons: true,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  toggleShowPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  removePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className="section">
        <button onClick={() => this.toggleShowPersons()}>Show Persons</button>

        {this.state.showPersons && (
          <div className="section">
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  remove={() => this.removePerson(index)}
                  click={this.switchNameHandler}
                  changed={e => this.nameChangedHandler(e, person.id)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
