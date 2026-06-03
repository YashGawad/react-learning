import styles from "./TodoItems.module.css"
import TodoItem from "./TodoItem";
import { useContext, useState } from "react";
import { TodoItemsContext } from "./store/Todo-Items-Store";
const TodoItems = () => {
  
  const contextObj = useContext(TodoItemsContext)
  const todoitems = contextObj.todoitems;
  
  return (
    <div className={styles.leftText}>
      {todoitems.map((todoitem) => (
        <TodoItem
          key={todoitem.name}
          todoName={todoitem.name}
          todoDate={todoitem.duedate}
        ></TodoItem>
      ))}
      {/* <TodoItem todoName={"Buy Milk"} todoDate={"4/10/2023"}></TodoItem>
      <TodoItem todoName={"Go to College"} todoDate={"4/10/2023"}></TodoItem> */}
    </div>
  );
}

export default TodoItems;