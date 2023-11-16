import classes from "../../styles/challenges/challenge_1.module.scss";

const Challenge_2 = () => {
  return (
    <div className={classes.question}>
      <div>
        <p>
          برنامه ای بنویسید که دو عدد ورودی بگیرد. اگر اولین عدد ورودی زوج بود آن را در
          عدد دوم ضرب کند و حاصل ضرب را نمایش دهد.
          <br /> اما اگر اولین عدد ورودی فرد بود، آن را با عدد دوم جمع کند و آن را در
          حاصل جمع نمایش دهد.
        </p>
      </div>
    </div>
  );
};

export default Challenge_2;
