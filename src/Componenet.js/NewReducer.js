import React, { useReducer } from "react";
import { Link } from "react-router-dom";
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + action.payload };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function NewReducer() {
  const initialState = {
    count: 0,
  };
  const [state, dispath] = useReducer(reducer, initialState);
  console.log(dispath);
  function increment() {
    dispath({ type: ACTION.INCREMENT, payload: 5 });
  }
  function decrement() {
    dispath({ type: ACTION.DECREMENT });
  }
  return (
    <div>
      <button>
        <Link to="/NewReducer1">Go page 4</Link>
      </button>
      <button>
        <Link to="/Reducer">Back page 3</Link>
      </button>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <span>{state.count}</span>
      <div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default NewReducer;
