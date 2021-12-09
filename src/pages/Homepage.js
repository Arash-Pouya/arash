import React from "react";
import "./Homepage.css";
import Aboutme from "./Aboutme";
import Workexperience from "./WorkExperience";
import Skills from "../components/Skills/Skills";
// import Example from "../pages/Example";
// import Title from "../components/Title/Title";
const Homepage = () => {
  return (
    <div className="homepage">
      <Aboutme />
      <Workexperience />
      <Skills />
    </div>
  );
};

export default Homepage;
