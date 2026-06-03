function AddTodo() {
  return (
    <div className="container text-center">
        <div className="row space">
          <div className="col-4">
            <input type="text" placeholder="Enter Todo here" name="" id="" />
          </div>
          <div className="col-3">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button type="button" className="btn1 btn btn-success">Add</button>
          </div>
        </div>
      </div>
  );
}

export default AddTodo;
