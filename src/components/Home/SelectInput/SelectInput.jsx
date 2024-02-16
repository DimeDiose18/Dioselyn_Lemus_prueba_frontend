import { useState } from "react";
import styles from "./SelectInput.module.scss";

const SelectInput = () => { 
const [isMenuOpen, setMenuOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState('');
const [isCaretRotated, setCaretRotated] = useState(false);

const handleSelectClick = () => {
  setCaretRotated(!isCaretRotated);
  setMenuOpen(!isMenuOpen);
};

const handleOptionClick = (option) => {
  setSelectedOption(option);
  setCaretRotated(false);
  setMenuOpen(false);
};

return (
  <div className={styles.dropdown}>
    <div className={styles.select} onClick={handleSelectClick}>
      <span className={`${styles.caret} ${isCaretRotated ? styles['caret-rotate'] : ''}`}></span>
      <span className={`${styles.selected} ${selectedOption ? '' : styles.placeholder}`}>
        {selectedOption || 'Select an option'}
      </span>
    </div>
    {isMenuOpen && (
      <ul className={styles.menu}>
        <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
        <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
        <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
        {/* Agrega más opciones según sea necesario */}
      </ul>
    )}
  </div>
);
};
export { SelectInput };
