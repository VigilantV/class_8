import classes from "../../styles/challenges/challenge_4.module.scss";
import challenge_4 from "../../assets/images/challenges/challenge_4.jpg";

const Challenge_4 = () => {
  return (
    <div className={classes.question}>
      <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
      <img src={challenge_4} />
    </div>
  );
};

export default Challenge_4;
