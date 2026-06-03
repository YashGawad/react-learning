import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./components/Appname.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem1 from "./components/Todoitem1.jsx";
import TodoItem2 from "./components/TodoItem2.jsx";
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <AddTodo></AddTodo>
      <div className="leftText">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
