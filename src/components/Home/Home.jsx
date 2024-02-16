import { Animation } from "./Animation/Animation";
import { Banner } from "./Banner/Banner";
import styles from "./Home.module.scss";
import { RadioInput } from "./RadioInput/RadioInput";
import { SelectInput } from "./SelectInput/SelectInput";
import { FormInput } from "./FormInput/FormInput";
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
        <section className={styles.selectContainer}>
        <SelectInput />
        </section>
        <section className={styles.radioContainer}>
          <RadioInput />
        </section>
        <section className={styles.formContainer}>
          <FormInput />
        </section>
      </div>
    </>
  );
};

export { Home };
