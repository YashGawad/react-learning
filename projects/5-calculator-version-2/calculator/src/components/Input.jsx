import styles from "./Input.module.css";
function Input({displayValue}) {
  return (
    <input className={styles.display} type="text" value={displayValue} readOnly />
  )
}

export default Input;