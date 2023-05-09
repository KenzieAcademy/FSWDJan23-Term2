import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  function handleIncrement(event) {
    /* your code here */
  }

  function handleDecrement(event) {
    /* your code here */
  }

  return (
    <div className="Counter">
      <button>decrement (-)</button>
      <span className={count < 10 ? "black-text" : "red-text"}>{count}</span>
      <button>increment (+)</button>
    </div>
  );
};

export default Counter;
