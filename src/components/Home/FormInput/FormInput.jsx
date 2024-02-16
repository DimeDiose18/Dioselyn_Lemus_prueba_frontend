import { useState, useEffect } from "react";
import styles from "./FormInput.module.scss";

const FormInput = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
  }, [inputValues]);

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.input}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div>
          <textarea
            className={styles.text}
            rows={6}
            cols={44}
            readOnly
            value={`${inputValues.name.length ? `Name: ${inputValues.name}` : ""} \n${inputValues.email.length ? `Email: ${inputValues.email}` : ""}`}
          />
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btnForm} disabled>
          Submit
        </button>  
        </div>
        
      </form>
    </div>
  );
};

export { FormInput };
