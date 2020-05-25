import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "max", age: "20" },
      { name: "Isha", age: "23" },
      { name: "anu", age: "56" },
    ],
  });
  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("was clicked");
    setPersonsState({
      persons: [
        { name: "Resmi", age: "20" },
        { name: "Ishani", age: "23" },
        { name: "anukutty", age: "56" },
      ],
    });
  };
  return (
    <div className="App">
      <h1>This is my first APP</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        myHobbies:Watching TV
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  //return React.createElement("div", null, "hi", "Hi I'M React app!!!!");

  /* return React.createElement(
   "div",
   { className: "App" },
   React.createElement("h1", null, "Hi I'M React app!!!!")
 );*/
};

export default app;
