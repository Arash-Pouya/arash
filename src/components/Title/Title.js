import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="title">
      <label>نام : {props.firstname}</label>
      <label>نام خانوادگی : {props.lastname}</label>
      <label>تاریخ تولد : {props.age} </label>
      <label>شماره تماس : {props.phonenumber}</label>
      <label> آدرس ایمیل : {props.email}</label>
      <label> آدرس گیت هاب : {props.github}</label>
      <label> آدرس لینکدین : {props.linkedin}</label>
    </div>
  );
};

export default Title;
