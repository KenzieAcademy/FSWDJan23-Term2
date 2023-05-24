import { useState } from "react";
import Product from "./components/Product";
import shortid from "shortid";
import "./App.css";

const initialState = {
  cart: [
    {
      id: shortid.generate(),
      name: "scarf",
      price: "11.50",
      quantity: 1,
    },
    {
      id: shortid.generate(),
      name: "Shirt",
      price: "9.80",
      quantity: 1,
    },
    {
      id: shortid.generate(),
      name: "pants",
      price: "25.50",
      quantity: 1,
    },
  ],
  isOnMailingList: false,
};

const App = () => {
  const [state, setState] = useState(initialState);

  /**
   * Finds the product with a matching ID
   * and increases its quantity by 1.
   * Updates state.
   * @param {number} id
   */
  const handleIncrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setState({ ...state, cart: newList });
  };

  /**
   * Finds the product with matching ID
   * and decreases its quantity by 1 unless
   * it would decrease below zero.
   * Updates state.
   * @param {number} id
   */
  const handleDecrementQuantity = (id) => {
    const newList = state.cart.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setState({ ...state, cart: newList });
  };

  const handleCheckout = () => {
    alert(
      "Purchase Completed!" +
        (state.isOnMailingList ? " You will be added to the mailing list!" : "")
    );
  };

  const toggleMailingList = (e) => {
    setState((s) => ({ ...s, isOnMailingList: e.target.checked }));
  };

  return (
    <div className="app">
      <h2>Shopping Cart</h2>
      <ul className="list">
        {state.cart.map((item) => (
          <li key={item.id}>
            <Product
              product={item}
              handleIncrementQuantity={handleIncrementQuantity}
              handleDecrementQuantity={handleDecrementQuantity}
            />
          </li>
        ))}
      </ul>
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={state.isOnMailingList}
            onChange={toggleMailingList}
          />
          Sign me up for the mailing list!
        </label>
      </div>
      <button onClick={handleCheckout}>Purchase</button>
    </div>
  );
};

export default App;
