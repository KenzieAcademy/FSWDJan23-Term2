import { toPascalCase } from "../utils/toPascalCase";
import Quantity from "./Quantity";

const Product = ({
  product,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  /**
   * Utilizes incoming handleIncrementQuanitty
   * and the product's id to increment
   * that product's quantity
   */
  const increment = () => {
    handleIncrementQuantity(product.id);
  };

  /**
   * Utilizes incoming handleDecrementQuanitty
   * and the product's id to decrement
   * that product's quantity
   */
  const decrement = () => {
    handleDecrementQuantity(product.id);
  };

  return (
    <span>
      {toPascalCase(product.name)} - ${product.price} -{" "}
      <Quantity
        quantity={product.quantity}
        increment={increment}
        decrement={decrement}
      />
    </span>
  );
};

export default Product;
