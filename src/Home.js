import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setIncrement(increment + 1);
        }}
      >
        Click
      </button>
      <div>{increment}</div>
      <button><Link to="/next">Go Page 1</Link></button>
    </div>
  );
};

export default Home;
