import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  return (
    <div className="person">
      <h1>
        <p onClick={props.click}>
          I am {props.name} I have {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
      </h1>
    </div>
  );
};

export default Radium(person);
