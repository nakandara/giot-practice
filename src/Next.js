import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Children } from "react/cjs/react.production.min";
import ChildrenTest from "./ChildrenTest";
import PerantTest from "./PerantTest";
import { firstcontext } from "./context/Context";

const Next = () => {
  const { value, setValue, state, dispath } = useContext(firstcontext);

  return (
    <div>
      <button>
        <Link to="/">back page 1</Link>
      </button>
      <button>
        <Link to="/Reducer">Go page 2</Link>
      </button>

      <div>{value}</div>
      <div>
        <button
          onClick={() => {
            setValue(value + 4);
          }}
        >
          click
        </button>
      </div>
      <div>
        <ChildrenTest>my name is </ChildrenTest>
        <div>
          <h1>{state.count}</h1>
        </div>
        <PerantTest>second test</PerantTest>
        <button
          onClick={() =>
            dispath({ type: "INCREMENT", payload: 5, payload1: "ksks" })
          }
        >
          Buton 1
        </button>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Next;
