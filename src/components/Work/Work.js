import React from "react";
import "./Work.css";
const Work = (props) => {
  return (
    <div>
      <div className="work">
        <h2>{props.title}</h2>
        <div>
          <label>نام شرکت : {props.Co}</label>
          <label> عنوان شغلی : {props.Dv}</label>
          <label>{props.Ti}</label>
          <p>{props.main}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
