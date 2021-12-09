import React from "react";
import Work from "../components/Work/Work";
import Education from "../components/Education/Education";
import "./WorkExperience.css";
const Workexperience = (props) => {
  return (
    <div className="Work">
      <Work title="تجربه کاری" Co="رایانه پندار آپادانا (خوزستان - اهواز)" Dv="توسعه دهنده ی فرانت اند" Ti="از 1399 تا کنون" main="شرکت خصوصی به همراه یک توسعه دهنده ی بک اند ، به دنبال انجام پروژه های فریلنسری ، تعریف و طراحی چند نمونه کار مختلف  برای تمرین و تسلط بر مفاهیم پایه ای  و ارتباط با پایگاه داده  با تجربه آنلاین کردن دو سایت شخصی" />
      <Education title="مدرک تحصیلی" Co="  دانشگاه آزاد اسلامی (خوزستان - دزفول)" Dv="  مهندسی کشاورزی گرایش گیاه پزشکی مقطع لیسانس " Ti="از 1388 تا 1392 " main="بعد از اتمام دوره ی تحصیل به همراه یکی از اساتید به مدت چهار سال همکاری داشته ام و در زمینه پرورش حشرات مفید با ایشان همکاری داشته ام" />
    </div>
  );
};

export default Workexperience;
