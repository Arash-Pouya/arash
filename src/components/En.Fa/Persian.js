/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Persian.css";
const Persian = (props) => {
  return (
    <div className="persian">
      <div>
        <SocialMedia />
        <Skills one="JavaScript" two="React" three="HTML" four="CSS" five="Jquery" six="Ajax" seven="bootstrap4 & 5" eight="UiKit" nine="MUI (react)" ten="" />
      </div>
      <div></div>
    </div>
  );
};

export default Persian;
