import Quantity from "./Quantity";

const Product = (props) => {
  const handleIncrement = (e) => {
    // your code here
  };

  const handleDecrement = (e) => {
    // your code here
  };

  return (
    <span>
      Item Name - Item Price -
      {/* 
        Quantity component should have 3 total props:
          1. quantity
          2. handleIncrement
          3. handleDecrement
      */}
      <Quantity />
    </span>
  );
};

export default Product;
