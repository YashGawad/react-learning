import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoitems: [],
  addNewItem: () =>{},
  deleteItem: () => {}
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.taskname, duedate: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemtodelete,
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({children}) => {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (taskname, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        taskname,
        date,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (itemtodelete) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemtodelete,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoitems,
      addNewItem, 
      deleteItem
    }}>
      {children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemContextProvider;