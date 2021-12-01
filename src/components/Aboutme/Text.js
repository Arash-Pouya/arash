import React from "react";
import "./Text.css";
import JS from "../../assets/images/javascript.png";
import RI from "../../assets/images/react.png";
import HT from "../../assets/images/html.png";
import CS from "../../assets/images/css.png";
import BT from "../../assets/images/bootstrap.png";
import JQ from "../../assets/images/jquery.png";
const Text = (props) => {
  return (
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.textone}</p>
      <h2>{props.texttwo}</h2>
      <div>
        <img src={JS} />
        <img src={RI} />
        <img src={HT} />
        <img src={CS} />
        <img src={BT} />
        <img src={JQ} />
      </div>
    </div>
  );
};

export default Text;
