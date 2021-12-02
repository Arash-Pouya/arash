import React from "react";
import "./Example.css";
import SiteExample from "../components/example/SiteExample";
const Example = (props) => {
  return (
    <div className="example">
      <SiteExample titleexample="نمونه کارهای طراحی شده" titleexample2="لینک نمونه کارها" main="شما می تونید توی این صفحه با نمونه کارها ، کار کنید یا اینکه ار طریق لینک های زیر ، توی یک صفحه جدید با اونها کار کنید" />
    </div>
  );
};

export default Example;
