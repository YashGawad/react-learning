import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./components/Appname.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoItems from "./components/TodoItems.jsx";
import EmptyTask from "./components/EmptyTask.jsx";
import './App.css';
import TodoItemContextProvider from "./components/store/Todo-Items-Store.jsx";

function App() {

  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <Appname></Appname>
        <AddTodo></AddTodo>
        <EmptyTask></EmptyTask>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
