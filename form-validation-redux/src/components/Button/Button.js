import React from "react";
import classes from "./Button.css";

const button = (props) => {
  const buttonClass = [classes.Button];

  if (props.buttonType === "next") {
    buttonClass.push(classes.Next);
    return (
      <button className={buttonClass.join(" ")} onClick={props.clicked}>
        {props.label}
      </button>
    );
  } else if (props.buttonType === "back") {
    buttonClass.push(classes.Back);
    return (
      <button className={buttonClass.join(" ")} onClick={props.clicked}>
        {props.label}
      </button>
    );
  }
};

export default button;
