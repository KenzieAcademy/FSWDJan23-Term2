import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";

import "./App.css";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Confirmation from "./pages/Confirmation";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const registerUser = (name, email) => {
    setUser({ name, email });
    navigate("/dashboard");
  };

  const addProductToCart = (product) => {
    if (cart.find((cartItem) => cartItem.id === product.id)) return;

    setCart((cart) => [...cart, product]);
  };

  const removeProductFromCart = (product) =>
    setCart((cart) => cart.filter((cartItem) => cartItem.id !== product.id));

  return (
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route
        path="register"
        element={<Register registerUser={registerUser} />}
      />
      <Route
        path="dashboard"
        element={
          <Dashboard
            user={user}
            cart={cart}
            addProductToCart={addProductToCart}
            removeProductFromCart={removeProductFromCart}
          />
        }
      />
      <Route
        path="confirmation"
        element={<Confirmation email={user && user.email} cart={cart} />}
      />
    </Routes>
  );
};

export default App;
