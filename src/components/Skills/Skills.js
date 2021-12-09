import React from "react";
import "./Skills.css";
const Skills = (props) => {
  return (
    <div className="skills">
      <h2>مهارت ها</h2>
      <div>
        <p>مهارت های اصلی</p>
        <ul>
          <li>جاوااسکریپت</li>
          <li>ری اکت</li>
          <li>اچ تی ام ال</li>
          <li> سی اس اس</li>
          <li>جی کوئری</li>
          <li> ایجکس</li>
          <li> فریمورک بوت استرپ</li>
          <li> فریمورک یو آی کیت</li>
          <li>فریمورک متریال یو آی</li>
        </ul>
        <p>مهارت های فرعی</p>
        <ul>
          <li>ورد</li>
          <li>پاورپوینت</li>
          <li>اکسل</li>
          <li>فتوشاپ</li>
          <li>تعمیرات نرم افزاری</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
