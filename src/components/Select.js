/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Select.css";
import Button from "../components/UI/button/Button";
import Arash from "../assets/images/arash.png";
import { Link } from "react-router-dom";

// import { Row, Col } from "antd";

const Select = (prop) => {
  return (
    <div className="selectbox">
      <img src={Arash} className="image" />
      <p>آرش پویا</p>
      <p>Arash Pouya</p>
      <p>Please select your language</p>
      <Button>English</Button>
      <Link to="/farsi">
        <Button>فارسی</Button>
      </Link>
    </div>
  );
};
export default Select;
