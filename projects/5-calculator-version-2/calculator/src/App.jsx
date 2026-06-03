import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
function App() {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/","*","=", "AC" ];

  let [calVal, setCalVal] = useState("");

  const onButtonClick = ({ event, button }) => {
    if (button === "=") {
      let cal = eval(calVal);
      setCalVal(cal);
    }
    else if(button === "AC"){
      setCalVal("");
    }
    else {
      let inpNo = calVal + button
      setCalVal(inpNo);
    }
  };

  return (
    <Container>
      <div className={styles.calculator}>
        <Input displayValue = {calVal} ></Input>
        <Buttons buttons={buttons} onButtonClick={onButtonClick} ></Buttons>
      </div>
    </Container>
  );
}

export default App
