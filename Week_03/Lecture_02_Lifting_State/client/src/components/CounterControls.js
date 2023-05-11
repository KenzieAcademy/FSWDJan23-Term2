import React from "react";

const CounterControls = ({ initial, setCount }) => {
  const addFiveToCount = () => setCount((count) => count + 5);
  const addOneToCount = () => setCount((count) => count + 1);
  const resetCounter = () => setCount(initial);
  const subtractOneFromCount = () => setCount((count) => count - 1);
  const subtractFiveFromCount = () => setCount((count) => count - 5);

  return (
    <div className="flex-gap">
      <button onClick={subtractFiveFromCount}>- 5</button>
      <button onClick={subtractOneFromCount}>- 1</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={addOneToCount}>+ 1</button>
      <button onClick={addFiveToCount}>+ 5</button>
    </div>
  );
};

export default CounterControls;
