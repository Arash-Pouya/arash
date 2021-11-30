import React from "react";
import Select from "../components/Select";
import Persian from "../components/En.Fa/Persian";
// import Arash from "../assets/images/arash.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = (prop) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/farsi" element={<Persian />} />
      </Routes>
    </BrowserRouter>
  );
};
export default HomePage;
