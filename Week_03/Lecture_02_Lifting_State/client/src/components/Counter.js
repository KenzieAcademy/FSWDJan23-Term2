import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const Counter = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);
  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <CounterDisplay count={count} />
      <CounterControls initial={initial} setCount={setCount} />
    </div>
  );
};

export default Counter;
