import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button class="bg-primary">
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
