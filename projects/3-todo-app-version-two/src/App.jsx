import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./components/Appname.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoItems from "./components/TodoItems.jsx";
import './App.css';

function App() {
  const todoitems = [
    {
      name: "Buy milk",
      duedate: "4/10/2023"
    },
    {
      name: "Go to College", 
      duedate: "4/10/2023"
    },
    {
      name: "Play cricket",
      duedate: "7/5/2026"
    }
  ];
  return (
    <center className="todo-container">
      <Appname></Appname>
      <AddTodo></AddTodo>
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
