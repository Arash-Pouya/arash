import React from "react";
import "./SiteExample.css";
import amlak from "../../assets/images/amlak.JPG";
import Rp from "../../assets/images/r.pa.JPG";
import Shop from "../../assets/images/store1.JPG";
import Kitchen from "../../assets/images/store2.JPG";
const SiteExample = (props) => {
  return (
    <div className="SiteExample">
      <h2>{props.titleexample}</h2>
      <p>{props.main}</p>
      <div>
        <a href=" https://arash-pouya.github.io/amlak/">سایت مشاوره املاک </a>
        <img src={amlak} />
        <a href="https://arash-pouya.github.io/BigTech/"> سایت شرکتی </a>
        <img src={Rp} />
        <a href="https://arash-pouya.github.io/ShopEditOne/">فروشگاه شماره یک </a>
        <img src={Shop} />
        <a href="https://arash-pouya.github.io/KitchenShop/">فروشگاه شماره دو </a>
        <img src={Kitchen} />
      </div>
    </div>
  );
};

export default SiteExample;
