import { useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount || 0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  return {
    count,
    increaseCount,
    decreaseCount,
  };
};

export default useCounter;
