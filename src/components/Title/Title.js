import React from "react";
// import Arash from "../../assets/images/arash.png";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="Title">
      {/* <img src={Arash} /> */}
      <h1>{props.name}</h1>
      <div>
        <label> Phone number : {props.phone}</label>
        <label> Email addres : {props.email}</label>
        <label>City : {props.city}</label>
        <label>
          Linkedin : <a href="https://www.linkedin.com/in/arash-pouya"> {props.linkedin}</a>
        </label>
      </div>
    </div>
  );
};

export default Title;
