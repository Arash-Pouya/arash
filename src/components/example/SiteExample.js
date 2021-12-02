import React from "react";
import "./SiteExample.css";
const SiteExample = (props) => {
  return (
    <div className="SiteExample">
      <h2>{props.titleexample}</h2>
      <p>{props.main}</p>
      <div>
        <h2>{props.titleexample2}</h2>

        <a href=" https://arash-pouya.github.io/amlak/">سایت مشاوره املاک </a>
        <a href="https://arash-pouya.github.io/BigTech/"> سایت شرکتی </a>
        <a href="https://arash-pouya.github.io/ShopEditOne/">فروشگاه شماره یک </a>
        <a href="https://arash-pouya.github.io/shop/">فروشگاه شماره دو </a>
      </div>
    </div>
  );
};

export default SiteExample;
