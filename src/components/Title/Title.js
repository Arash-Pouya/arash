import React from "react";
import Arash from "../../assets/images/arash.png";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="Title">
      <img src={Arash} />
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
};

export default Title;
