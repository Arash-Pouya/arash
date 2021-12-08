import React from "react";
import "./Homepage.css";
import Aboutme from "./Aboutme";
import Workexperience from "./WorkExperience";
// import Example from "../pages/Example";
// import Title from "../components/Title/Title";
const Homepage = () => {
  return (
    <div className="homepage">
      <Aboutme />
      <Workexperience />
    </div>
  );
};

export default Homepage;
