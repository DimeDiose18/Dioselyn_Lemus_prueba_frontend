import { Animation } from "./Animation/Animation";
import { Banner } from "./Banner/Banner";
import styles from "./Home.module.scss";
import { SelectInput } from "./SelectInput/SelectInput";
import { Sliderr } from "./Slider/Slider";

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
      <Sliderr />
      </div>
      <div className={styles.inputsContainer}>
        <secion>
        <SelectInput />
        </secion>
        <secion>radio buttons</secion>
        <secion>inputs</secion>
      </div>
    </>
  );
};

export { Home };
