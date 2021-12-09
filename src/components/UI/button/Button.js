import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="one">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">نمونه کار</span>
      </button>
    </div>
  );
};

export default Button;
