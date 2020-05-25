import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "abcd1", name: "max", age: "20" },
      { id: "abcd2", name: "Isha", age: "23" },
      { id: "abcd3", name: "anu", age: "56" },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  /*switchNameHandler = (newName) => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: "20" },
        { name: "Ishani", age: "23" },
        { name: "anukutty", age: "56" },
      ],
    });
  };*/
  deletePersonsHandler = (personsindex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsindex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is my first APP</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          toggle Persons
        </button>
        {persons}
      </div>
    );
  }

  //return React.createElement("div", null, "hi", "Hi I'M React app!!!!");

  /* return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hi I'M React app!!!!")
  );*/
}

export default App;
