import React from "react";
import "./Aboutme.css";
import Text from "../components/Aboutme/Text";
const Aboutme = (props) => {
  return (
    <div className="aboutme">
      <Text title="اطلاعات شخصی" textone="آرش پویا هستم ، برنامه نویسی رو با یادگیری مهارت های پایه‌ی فرانت اند آغاز کردم و تجربه ی کار با فریمورک‌های CSS رو دارم، بعد از اون به سراغ یادگیری جاوااسکریپت رفتم و از حدود شش ماه هست که شروع به یادگیری ری اکت کردم. در این مسیر یک متخصص بک اند همراه من بوده و پروژه هایی رو برای خودمون تعریف کردیم که ترکیبی از تکنولوژی های جاوا اسکریپت و پایتون باشه" texttwo="مهارت های اصلی " />
    </div>
  );
};

export default Aboutme;
