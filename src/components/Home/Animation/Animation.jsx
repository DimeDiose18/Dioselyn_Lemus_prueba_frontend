import styles from './Animation.module.scss';
import img from '../../../assets/backgrounIMG.jfif';


const Animation = () => {
  return (
    <div className={styles.containerAnimation}>
      <img src={img} alt="background" className={styles.img} />
      <img src={img} alt="background" className={styles.img2} />
    </div>
  )
}

export { Animation }
