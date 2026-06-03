import { useState } from "react";
import Item from "./Item";
import styles from "./Item.module.css";
const FoodItems   = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);
  const handleBuyButtonClicked=(item) => {
    let newItems = [...activeItems, item]
    setActiveItems(newItems);
    console.log(newItems);
    console.log(`${item} is bought`);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          buyButtonClicked={() => handleBuyButtonClicked(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;