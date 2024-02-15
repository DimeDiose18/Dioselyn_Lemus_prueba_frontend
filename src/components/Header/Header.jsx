import styles from "./Header.module.scss";
import { IconMenu } from "../../assets/svg/IconMenu";
import { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navLinks = [
    'Home', 
    'Pages',
    'About',
    'Contact'
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.navElements} ${showNavbar ? styles.active : ""}`}>
          <ul>
            {navLinks.map((link, index) => <li key={index}>{link}</li>)}
          </ul>
        </div>
        <div className={styles.menuIcon} onClick={()=> setShowNavbar(!showNavbar)}>
          <IconMenu />
        </div>
      </div>
    </nav>
  );
};

export { Header };
