import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ initialCount = 0 }) => {
  const initial = initialCount >= 0 && initialCount <= 20 ? initialCount : 0;
  const [count, setCount] = useState(initial);
  const [isModified, setIsModified] = useState(false);

  function handleIncrement(event) {
    setCount((count) => (count < 20 ? count + 1 : count));
    setIsModified(true);
  }

  function handleDecrement(event) {
    if (count > 0) {
      setCount(count - 1);
      setIsModified(true);
    }
  }

  function handleReset(event) {
    setCount(initial);
    setIsModified(false);
  }

  return (
    <div className="Counter">
      <button onClick={handleDecrement}>decrement (-)</button>
      <span className={count >= 10 ? "text-red" : "text-black"}>{count}</span>
      <button onClick={handleIncrement}>increment (+)</button>
      {isModified && (
        <div className="flex-center">
          <button onClick={handleReset}>reset counter</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
