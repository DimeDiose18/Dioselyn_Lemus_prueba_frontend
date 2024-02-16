import styles from './RadioInput.module.scss';

const RadioInput = () => {
  return (
    <div className={styles.radioContainer}>
      <ul>
        <li>
          <input type="radio" name="radio" id="radio1" className={styles.inputRadio} />
          <label htmlFor="radio1">Option 1</label>
        </li>
        <li>
          <input type="radio" name="radio" id="radio2" className={styles.inputRadio} />
          <label htmlFor="radio2">Option 2</label>
        </li>
        <li>
          <input type="radio" name="radio" id="radio3" className={styles.inputRadio} />
          <label htmlFor="radio3">Option 3</label>
        </li>
        <li>
          <input type="radio" name="radio" id="radio4" className={styles.inputRadio} />
          <label htmlFor="radio4">Option 4</label>
        </li>
      </ul>
      
    </div>
  )
}

export  { RadioInput };
