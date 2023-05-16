import React, { useState } from "react";

const SeparationWhat = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

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

export default SeparationWhat;
