import styles from "./Button.module.css";

const Button = ({ button, onButtonClick }) => {
  return (
    <button className={styles.button} onClick={() => onButtonClick({button})}>
      {button}
    </button>
  );
};

export default Button;