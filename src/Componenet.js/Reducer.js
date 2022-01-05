import React, { useReducer } from "react";
import { Link } from "react-router-dom";
function reducer(state, action) {
  switch (action.count) {
    case "add":
      return { count: this.state.count + 1 };
    case "sub":
      return { count: this.state.count - 1 };
    default:
      return state;
  }
}

function Reducer() {
  const initialState = {
    count: 0,
  };
  const [state, dispath] = useReducer(reducer, initialState);
  return (
    <div>
      <button>
        <Link to="/NewReducer">Go page 3</Link>
      </button>
      <button>
        <Link to="/Next">Back page 2</Link>
      </button>
      <div>
        Count: {state.count}
        <button onClick={() => dispath({ type: "add" })}>+</button>
        <button onClick={() => dispath({ type: "sub" })}>-</button>
      </div>
    </div>
  );
}

export default Reducer;
