import React from "react";
import "./Skills.css";
const Skills = (props) => {
  return (
    <div className="skills">
      <p>مهارت ها</p>
      <ul>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
        <li>{props.five}</li>
        <li>{props.six}</li>
        <li>{props.seven}</li>
        <li>{props.eight}</li>
        <li>{props.nine}</li>
        <li>{props.ten}</li>
      </ul>
    </div>
  );
};

export default Skills;
