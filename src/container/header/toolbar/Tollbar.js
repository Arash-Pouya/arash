import React from "react";
import "./Tollbar.css";
// import { NavLink } from "react-router-dom";
const Tollbar = () => {
  return (
    <div className="tollbar">
      {/* <NavLink end style={{ textDecoration: "none" }} to="/Aboutme">
        <p>درباره من</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/Example">
        <p>نمونه کار</p>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} end to="/ContanctMe">
        <p>تماس با من</p>
      </NavLink> */}
      <p style={{ fontSize: "20px" }}>Arash pouya</p>
      {/* <h2>آرش پویا</h2> */}
      <div>
        <ul>
          <li>Phone number : 09907859740</li>
          <li>Email addres : arash.pouya.c@gmail.com</li>
          <li>City : Khuzestan.Dezful</li>
          <li>
            Linkedin : <a href="https://www.linkedin.com/in/arash-pouya">arash-pouya</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tollbar;
