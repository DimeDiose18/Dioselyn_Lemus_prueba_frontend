import styles from "./Header.module.scss";
import { IconMenu } from "../../assets/svg/IconMenu";
import { useState } from "react";
import { BigMenu } from "./BigMenu/BigMenu";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBigMenu, setShowBigMenu] = useState(false);

  const navLinks = [
    { Link: "Home" },
    { Link: "Pages", component: true },
    { Link: "About" },
    { Link: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div
          className={`${styles.navElements} ${showNavbar ? styles.active : ""}`}
        >
          <ul className={styles.ulContain}>
            {navLinks.map((link, index) => {
              if (link.component) {
                return (
                  <li key={index} className={styles.linkRelative} >
                  <span onClick={() => setShowBigMenu(!showBigMenu)}>
                    {link.Link}
                  </span>
                  
                    {showBigMenu && 
                    <BigMenu />
                    }
                  </li>
                );
              }

              return <li key={index}>{link.Link}</li>;
            })}
          </ul>
        </div>
        <div
          className={styles.menuIcon}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <IconMenu />
        </div>
      </div>
     
    </nav>
  );
};

export { Header };
