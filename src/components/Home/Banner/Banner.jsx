import { IconArrow } from "../../../assets/svg/IconArrow";
import styles from "./Banner.module.scss";

const Banner = () => {
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
      <div className={styles.buttonContainer}>
        <button><strong>Go there...</strong><span><IconArrow/></span></button>
      </div>
    </div>
  );
};

export { Banner };
