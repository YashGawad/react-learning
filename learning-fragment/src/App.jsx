import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";
import { useState } from "react";
import { use } from "react";
// import React from "react";

function App() {

  let [foodItems, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItem(newItems);
    }
  }

  return (
    <>
      <Container>
        {/* <React.Fragment></React.Fragment>*/}
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia repudiandae magnam temporibus voluptatum sequi praesentium nam aut molestiae, commodi alias !</p>
      </Container> */}
    </>
  );
};

export default App;
