import { useState } from "react";
import styles from "./SelectInput.module.scss";
import { IconArrowDown } from "../../../assets/svg/IconArrowDown";
import { IconArrowUp } from "../../../assets/svg/IconArrowUp";

const SelectInput = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelectClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.select} onClick={handleSelectClick}>
        <span
          className={`${styles.selected} ${
            selectedOptions.length === 0 ? styles.placeholder : ""
          }`}
        >
          {selectedOptions.length === 0 ? "Select" : selectedOptions.join(", ")}
        </span>
        <span>
          {!isMenuOpen ? (
            <IconArrowDown color="#0c1726" width={"20px"} height={"22px"} />
          ) : (
            <IconArrowUp color="#0c1726" width={"20px"} height={"20px"} />
          )}
        </span>
      </div>
        <ul className={styles.menu} style={!isMenuOpen ? {height: "0px", padding: "0 10px"} : {height: "224px"}}>
          {options.map((option, index) => (
            <li key={index}>
              <input
                className={styles.input}
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option}
            </li>
          ))}
        </ul>
    </div>
  );
};

export { SelectInput };
