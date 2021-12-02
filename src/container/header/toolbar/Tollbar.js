import React from "react";
import "./Tollbar.css";
import { NavLink } from "react-router-dom";
const Tollbar = () => {
  return (
    <div className="tollbar">
      <NavLink end style={{ textDecoration: "none" }} to="/Aboutme">
        <p>درباره من</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Example">
        <p>نمونه کار</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/homepage">
        <p>تماس با من</p>
      </NavLink>
    </div>
  );
};

export default Tollbar;
