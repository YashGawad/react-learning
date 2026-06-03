import { useContext } from "react";
import { TodoItemsContext } from "./store/Todo-Items-Store";

const EmptyTask = () => {

  const contextObj = useContext(TodoItemsContext)
  const todoitems = contextObj.todoitems;
  return (
    <>
     {todoitems.length === 0 ? <h3>No task to execute</h3> : null}
    </>
  )
}

export default EmptyTask;