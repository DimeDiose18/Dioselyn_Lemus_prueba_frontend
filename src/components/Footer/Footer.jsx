import styles from './Footer.module.scss';
import info from '../../utils/footerInfo.json';
import { InfoFooter } from './InfoFooter/InfoFooter';

const Footer = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log('footer link');
  }
  return (
    <div className={styles.footerContainer}>
    <div className={styles.cardContainer}>
      {info.map((cardInfo, index) => <InfoFooter key={index} info={cardInfo} />)}
    </div>

    <div className={styles.footerLink}>
    <p>Lorem ipsum dolor amet consectetur adipiscing elit. <a href='#' onClick={handleLinkClick}>Link here</a> Lorem ipsum</p>
    </div>
    
    </div>
  )
}

export { Footer }
