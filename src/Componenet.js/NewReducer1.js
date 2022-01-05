import React, { useState, useReducer } from "react";
import Todo from "./Todo";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.ADD_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now, name: name, complete: false, data1: 1 };
}
export const NewReducer1 = () => {
  const [todos, disaptch] = useReducer(reducer, []);
  const [name, setName] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    disaptch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    console.log(name);
    setName("");
  }
  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.key} todo={todo} disaptch={disaptch} />;
      })}
    </div>
  );
};
