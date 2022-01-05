import React, { createContext, useReducer } from "react";
import { useState } from "react/cjs/react.development";

export const firstcontext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload + action.payload1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Context({ children }) {
  const [value, setValue] = useState(3);
  const initialState = { count: 20 };
  const [state, dispath] = useReducer(reducer, initialState);

  return (
    <firstcontext.Provider value={{ value, setValue, state, dispath }}>
      {children}
    </firstcontext.Provider>
  );
}

export default Context;
