/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Skills from "../Skills/Skills";
// import { PersianNumber } from "react-persian";
import Title from "../Title/Title";
import "./Persian.css";
const Persian = (props) => {
  return (
    <div className="persian">
      {/* <PersianNumber> */}
      <Title firstname="آرش" lastname="پویا" age="1369/04/19" phonenumber="09907859740" email="arash.pouya.c@gmail.com" github="www.github.com/arash-pouya" linkedin="www.linkedin.com" />
      <Skills />
      {/* </PersianNumber> */}
    </div>
  );
};

export default Persian;
