import React from "react";
//import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 70%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    widows: 450px;
  }
`;

const person = (props) => {
  /* const style = {
    "@media(min-width:500px)": {
      width: "450px",
    },
  };*/

  return (
    <StyleDiv>
      <h1>
        <p onClick={props.click}>
          I am {props.name} I have {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
      </h1>
    </StyleDiv>
  );
};

export default person;
