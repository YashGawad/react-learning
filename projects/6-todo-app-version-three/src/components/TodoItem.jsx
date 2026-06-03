import { useContext } from "react";
import styles from "./TodoItem.module.css"
import { MdOutlineDoneOutline } from "react-icons/md";
import { TodoItemsContext } from "./store/Todo-Items-Store";

const TodoItem = ({ todoName, todoDate}) => {

  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row space">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={'btn-danger btn ${styles.btn1}'} onClick={() => deleteItem(todoName)}>
            <MdOutlineDoneOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;