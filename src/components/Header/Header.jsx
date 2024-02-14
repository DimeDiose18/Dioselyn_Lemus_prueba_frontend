import styles from "./Header.module.scss";
import { IconMenu } from "../../assets/svg/IconMenu";
import { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.navElements} ${showNavbar ? styles.active : ""}`}>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          <IconMenu />
        </div>
      </div>
    </nav>
  );
};

export { Header };
