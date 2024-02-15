import React from "react";
import { useReducer } from "react";

const Todo = () => {
  const ACTIONS = {
    addTodo: "addTodo",
    deleteTodo: "deleteTodo",
    createTodo: "createTodo",
  };
  // -------------------------------REDUCE FUNCTION------------------------- 
   const reducer = (state, action) => {
     switch (action.type) {
       case ACTIONS.addTodo:
         return {
           ...state,
           todos: [
             ...state.todos,
             { id: Math.random(), todo: action.payload.todo },
           ],
         };

       case ACTIONS.createTodo:
         return { ...state, todoInput: action.payload.input };

       case ACTIONS.deleteTodo:
         const updatedTodos = state.todos.filter(
           (todo) => todo.id !== action.payload.id
         );
         return { ...state, todos: updatedTodos };

       default:
         return state;
     }
   };

  // ---------------------------------------USEREDUCER AND STATE ------------------------------------ 
  
  const [state, dispatch] = useReducer(reducer, {
    todos: [
      { id: Math.random(), todo: "Hello Ebuka" },
      { id: Math.random(), todo: "Hello Moses" },
    ],
    todoInput: "",
  });
  
  
  // -----------------------------------------DISPATCH ----------------------------------- 

  //   handle input change
  const handleInputChange = (e) => {
    dispatch({ type: ACTIONS.createTodo, payload: { input: e.target.value } });
  };

  // handle to add todo
  const handleAddInput = (e) => {
    e.preventDefault();
    //   checking that the input is not empty
    if (state.todoInput.trim()) {
      dispatch({ type: ACTIONS.addTodo, payload: { todo: state.todoInput } });
      dispatch({ type: ACTIONS.createTodo, payload: { input: "" } });
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: ACTIONS.deleteTodo,
      payload: { id },
    });
  };

 
  

  return (
    <div className="todo">
      <h2>Todo List</h2>
      {state.todos.map((td) => {
        return (
          <div key={td.id} className="flex">
            <p>{td.todo}</p>
            <button onClick={() => handleDeleteTodo(td.id)}>Delete</button>
          </div>
        );
      })}
      <form onSubmit={handleAddInput}>
        <input
          type="text"
          value={state.todoInput}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit">Add Todo </button>
      </form>
    </div>
  );
};

export default Todo;
