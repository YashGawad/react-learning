import styles from "./TodoItem.module.css"

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div className="container">
      <div className="row space">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={'btn-danger btn ${styles.btn1}'}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;