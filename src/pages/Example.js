import React from "react";
import "./Example.css";
import SiteExample from "../components/example/SiteExample";
const Example = (props) => {
  return (
    <div className="example">
      <SiteExample titleexample="نمونه کارهای طراحی شده" titleexample2="لینک نمونه کارها" main="برای مشاهده نمونه ها بر روی اسم آنها کلیک کنید" />
    </div>
  );
};

export default Example;
