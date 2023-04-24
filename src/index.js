import React from "react";
import ReactDOM from "react-dom";

let number = 9;
const fName = "React";
const lName = "JS";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p> Your lucky number is {number} </p>
    <p> Your lucky dice number is {Math.floor(Math.random() * 6) + 1} </p>
  </div>,
  document.getElementById("root")
);
