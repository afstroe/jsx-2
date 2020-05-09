//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <>
    <h1>My favourite foods</h1>
    <ul>
      <li>steak;</li>
      <li>pasta;</li>
      <li>all kinds of pie;</li>
    </ul>
  </>,
  document.getElementById("root")
);
