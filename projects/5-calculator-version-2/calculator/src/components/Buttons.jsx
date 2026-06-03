import App from "../App";
import styles from "./Buttons.module.css";
import Button from "./Button.jsx"
const Buttons = ({buttons, onButtonClick}) => {

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <Button
          key={button}
          button={button}
          onButtonClick={() => onButtonClick({button})}
        ></Button>
      ))}
    </div>
  );
}

export default Buttons;

{/* <div className={styles.buttonContainer}>
  <button className={styles.button}>C</button>
  <button className={styles.button}>1</button>
  <button className={styles.button}>2</button>
  <button className={styles.button}>3</button>
  <button className={styles.button}>4</button>
</div> */}