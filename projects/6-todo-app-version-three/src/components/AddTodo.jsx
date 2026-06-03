import { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "./store/Todo-Items-Store";

function AddTodo({}) {
  const nameValue = useRef();
  const dateValue = useRef();

  const { addNewItem } = useContext(TodoItemsContext);

  const handleData = (event) => {
    event.preventDefault();
    const taskname = nameValue.current.value;
    const date = dateValue.current.value;
    nameValue.current.value = "";
    dateValue.current.value = "";
    addNewItem(taskname, date);
  }

  return (
    <div className="container text-center">
      <form className="row space" onSubmit={handleData}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={nameValue}

          />
        </div>
        <div className="col-3">
          <input type="date" ref={dateValue} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn1 btn btn-success"
          >
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
