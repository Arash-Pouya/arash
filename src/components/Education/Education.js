import React from "react";
import "./Education.css";
const Education = (props) => {
  return (
    <div>
      <div>
        <div className="Education">
          <h2>{props.title}</h2>
          <div>
            <label>نام دانشگاه : {props.Co}</label>
            <label> رشته ی تحصیلی : {props.Dv}</label>
            <label>{props.Ti}</label>
            <p>{props.main}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
