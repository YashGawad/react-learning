import styles from "./App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Container from "../../../../learning-fragment/src/components/Container";
function App() {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.calculator}>
      <Input></Input>
      <Buttons buttons={buttons}></Buttons>
    </div>
  );
}

export default App
