import classes from "../../styles/challenges/challenge_1.module.scss";
import challenge_1 from "../../assets/images/challenges/challenge_1.jpg";

const Challenge_1 = () => {
  return (
    <div className={classes.question}>
      <div>
        <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
        <p>
          ابتدا از کاربر به ترتیب نام و سنش را ورودی بگیرید. پس از نمایش خروجی
          های خواسته شده، از متغیری که در آن سن را ذخیره کرده اید برای انجام
          محاسبات خواسته شده استفاده کنید.
        </p>
      </div>
      <img src={challenge_1} />
    </div>
  );
};

export default Challenge_1;
