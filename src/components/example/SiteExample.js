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
        <div className="one"></div>
        <a href="https://arash-pouya.github.io/BigTech/"> سایت شرکتی </a>
        <div className="two"></div>
        <a href="https://arash-pouya.github.io/ShopEditOne/">فروشگاه شماره یک </a>
        <div className="three"></div>
        <a href="https://arash-pouya.github.io/KitchenShop/">فروشگاه شماره دو </a> <div className="four"></div>
      </div>
    </div>
  );
};

export default SiteExample;
