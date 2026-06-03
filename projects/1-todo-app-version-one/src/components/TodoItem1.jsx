function TodoItem1 (){
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div className="container">
        <div className="row space">
          <div className="col-4">{todoName}</div>
          <div className="col-3">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn1 btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem1;