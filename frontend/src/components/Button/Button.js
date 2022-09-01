import React from "react";
import "./button.scss";

function Button(props) {
  return (
    <div onClick={props.onClick} className="button">
      {props.text}
    </div>
  );
}

export default Button;
