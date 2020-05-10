//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// All CSS attributes mentioned is JSX must follow the camelCase
// convension (ie CSS contenteditable must be contentEditable
// when used with JSX)

const pixum = "https://picsum.photos/200";

ReactDOM.render(
  <>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favourite foods
    </h1>
    <ul>
      <li>steak;</li>
      <li>pasta;</li>
      <li>all kinds of pie;</li>
    </ul>
    <div>
      <img
        src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg?resize=768:*"
        alt="steak"
        className="food-img"
      />
      <img
        src="https://www.tasteandtellblog.com/wp-content/uploads/2020/01/Alfredo-Pasta-Bacon-tasteandtellblog.com-1-768x512.jpg"
        alt="pasta"
        className="food-img"
      />
      <img
        src="https://www.jusrol.co.uk/wp-content/uploads/2018/08/134_Image_Hero-Image_2018_7_6_19_24_40-1.jpg"
        alt="pie"
        className="food-img"
      />
      <img src={pixum} alt="random lorem ipsum" className="food-img" />
    </div>
  </>,
  document.getElementById("root")
);
