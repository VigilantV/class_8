import downloadFile from "../common/downloadFile";
import solution_1 from "../../assets/solutions/solution_1.zip";

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
        <div style={{ display: "flex", gap: "1vw" }}>
          <p>پاسخ چالش اول:</p>
          <p
            onClick={() => downloadFile("solution_1", solution_1)}
            className={classes.links}
          >
            کلیک کنید
          </p>
        </div>
      </div>
      <img src={challenge_1} />
    </div>
  );
};

export default Challenge_1;
