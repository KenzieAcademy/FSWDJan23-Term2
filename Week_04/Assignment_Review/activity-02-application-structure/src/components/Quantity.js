const Quantity = ({ quantity, increment, decrement }) => {
  return (
    <span>
      <button onClick={decrement}>-</button> {quantity}{" "}
      <button onClick={increment}>+</button>
    </span>
  );
};

export default Quantity;
