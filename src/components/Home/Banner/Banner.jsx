import { IconArrow } from "../../../assets/svg/IconArrow";
import { Star } from "../../../assets/svg/StarIcon";
import '../Animation/animation.scss'
import styles from "./Banner.module.scss";

const Banner = () => {
  const handleBtnClick = (event) => {
    event.preventDefault();
    console.log("Go There");
  }
  return (
    <div className={styles.bannerContainer}>
    
      <div className={styles.textContainer}>
        <h1>Lorem ipsum</h1>
        <h2>Neque tempor incididun</h2>
        <p>
          Neque el illum qui dolorem eum fugiat quo voluptas nulla pariatur...
          <br />
          There enim ad minima veniam, quis nostrum exercitationem ullam olu it pain...
        </p>
      </div>
      <Star className={styles.backStar} />
      <div className={styles.buttonContainer}>
        <button onClick={handleBtnClick}><strong>Go there...</strong><span><IconArrow/></span></button>
      </div>
    </div>
  );
};

export { Banner };
