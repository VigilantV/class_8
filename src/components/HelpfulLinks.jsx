import helpfulLinks from "../assets/data files/helpfulLinks";
import zipFiles from "../assets/data files/zipFiles";
import downloadFile from "./common/downloadFile";

import classes from "../styles/helpfulLinks.module.scss";

const HelpfulLinks = () => {
  return (
    <div className={classes.content}>
      <div className={classes.head}>
        <p>
          از اون جایی که مهارت search کردن یک هنره، توصیه همیشگی من اینه که تمام
          مشکلات نرم افزاری و برنامه نویسیتون رو داخل گوگل سرچ کنید.
        </p>
        <p>
          اما جهت آسون کردن بخشی از مسیر یادگیریتون، برخی از منابع آموزشی مفید
          رو اینجا براتون قرار میدم.
        </p>
      </div>
      <ul>
        {helpfulLinks.map((helpfulLink, i) => (
          <li key={i}>
            <div className={classes.circle}></div>
            <p>{helpfulLink.title}</p>
            <a
              href={helpfulLink.link}
              target="_blank"
              className={classes.links}
            >
              کلیک کنید
            </a>
          </li>
        ))}
        <li className={classes.python_edu}>
          <div className={classes.circle}></div>
          <p>آموزش پایتون به زبان فارسی:</p>
          <div>
            <p>
              ابتدا وارد
              <a
                href="https://codeyad.com/"
                target="_blank"
                className={classes.links}
              >
                این لینک‌
              </a>
              شده و داخل سایت ثبت نام کنید.
              <br /> سپس برای دیدن دوره های آموزشی از
              <a
                href="https://codeyad.com/coursePanel/2003/"
                target="_blank"
                className={classes.links}
              >
                ‌این لینک‌
              </a>
              استفاده کنید.
            </p>
            <p style={{ marginTop: "0.8vw" }}>
              (این دوره رایگان، اختیاریست و شما میتوانید برای یادگیری شخصی از هر
              منبع دیگری استفاده کنید.)
            </p>
          </div>
        </li>
      </ul>
      <div style={{marginBottom: "2vw"}}>
        <p className={classes.zip_file_title}>
          دانلود فایل های کار شده داخل کلاس:
        </p>
        {zipFiles.map((zipFile, i) => (
          <li key={i}>
            <div className={classes.circle}></div>
            <p>{zipFile.title}:</p>
            <p
              onClick={() =>
                downloadFile(zipFile.fileName, zipFile.file)
              }
              className={classes.links}
            >
              کلیک کنید
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HelpfulLinks;
