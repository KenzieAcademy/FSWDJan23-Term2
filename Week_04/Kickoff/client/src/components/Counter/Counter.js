import React from "react";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, increaseCount, decreaseCount } = useCounter();

  return (
    <div className="container">
      <h2>Let's play the counting game!</h2>
      <p>{count}</p>
      <div className="row">
        <button
          className="btn btn-danger col col-12 col-md-4 offset-md-1"
          onClick={decreaseCount}
        >
          Decrease
        </button>
        <button
          className="btn btn-primary col col-12 col-md-4 offset-md-2"
          onClick={increaseCount}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
