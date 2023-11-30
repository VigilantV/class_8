import classes from "../../styles/challenges/challenge_1.module.scss";
import proj_1_1 from "../../assets/images/challenges/proj_1_1.jpg";
import proj_1_2 from "../../assets/images/challenges/proj_1_2.jpg";

const Project_1 = () => {
  return (
    <div className={classes.question}>
      <div>
        <h1>
          کد یکی از دو سوال از زیر را به عنوان پروژه میان ترم به ایمیل ارسال
          کنید
        </h1>
        <br />
        <h3>سوال 1:</h3>
        <p>
          برنامه ای بنویسید که یک عدد به عنوان ارتفاع مثلث از کاربر دریافت کند
          <br /> و مطابق شکل خواسته شده را نمایش دهد
        </p>
        <div style={{ display: "flex" }}>
          <p>به ازای وارد کردن عدد 3 توسط کاربر به عنوان ارتفاع مثلث داریم:</p>
          <img style={{ width: "30vw", height: "10vw" }} src={proj_1_1} />
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <p>به ازای وارد کردن عدد 6 توسط کاربر به عنوان ارتفاع مثلث داریم:</p>
          <img style={{ width: "30vw", height: "10vw" }} src={proj_1_2} />
        </div>
        <br />
        <h3>سوال 2:</h3>
        <p>
          برنامه ای بنویسید که nامین عدد اول را مطابق با خواست کاربر نمایش دهد.
        </p>
        <p>اگر کاربر عدد 4 را وارد کند خروجی باید 4امین عدد اول باشد یعنی: 7</p>
        <p>
          اگر کاربر عدد 11 را وارد کند خروجی باید 11امین عدد اول باشد یعنی: 31
        </p>
      </div>
    </div>
  );
};

export default Project_1;
