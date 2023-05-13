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

  const handleDecrementQuantity = (id) => {
    // Your Code Here!
    // Do the same as handleIncrementQuantity, but decrement it instead
    // Remember that you should not decrement below zero!
  };

  const handleCheckout = () => {
    alert(
      "Purchase Completed!" +
        (state.isOnMailingList ? " You will be added to the mailing list!" : "")
    );
  };

  return (
    <div className="app">
      <h2>Shopping Cart</h2>
      <ul className="list">
        {state.cart.map((item) => (
          <li key={item.id}>
            <Product your props here />
          </li>
        ))}
      </ul>
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={state.isOnMailingList}
            onChange={(event) =>
              // Your code here!
              // Use setState to update the flag in state for the checkbox
              // Hint: use event.target.checked
              setState()
            }
          />
          Sign me up for the mailing list!
        </label>
      </div>
      <button onClick={handleCheckout}>Purchase</button>
    </div>
  );
};

export default App;
