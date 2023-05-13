import { useState } from "react";

const ListItem = ({ name, amount = 0 }) => {
  const initialAmount = amount > 0 ? amount : 0;
  const [count, setCount] = useState(initialAmount);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
  };

  return (
    <li className="list_item">
      <p>{name}</p>
      <div className="list_buttons">
        <button onClick={handleDecrement}> - </button>
        <p>{count}</p>
        <button onClick={handleIncrement}> + </button>
      </div>
    </li>
  );
};

export default ListItem;
