import { Animation } from "./Animation/Animation";
import { Banner } from "./Banner/Banner";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.sectionContainer}>
        <section className={styles.section_1}>
          <Banner />
        </section>
        <section className={styles.section_2}>
          <Animation />
        </section>
      </div>
      <div className={styles.sliderContainer}>
      <Slider />
      </div>
    </>
  );
};

export { Home };
