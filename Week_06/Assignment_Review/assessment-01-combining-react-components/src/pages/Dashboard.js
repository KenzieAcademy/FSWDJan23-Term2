import React from "react";
import items from "../items";
import ProductCard from "../components/ProductCard";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = ({ user, cart, addProductToCart, removeProductFromCart }) => {
  const navigate = useNavigate();

  if (!user) return <Navigate to="/register" />;

  return (
    <div id="container">
      <header>Whaddayawant, {user.name}?</header>
      <div id="main">
        <article>
          <div className="products">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                image={item.image}
                handleClick={() => addProductToCart(item)}
              />
            ))}
          </div>
        </article>
        <nav></nav>
        <aside>
          <div className="cart">
            <div className="flex">
              <p className="flex-50">Cart </p>
              <button
                className="flex-50 product-select"
                onClick={() => navigate("/confirmation")}
              >
                Confirm Choice
              </button>
            </div>
            <div className="cart-products">
              {cart.map((cartItem) => (
                <ProductCard
                  key={`cart-${cartItem.id}`}
                  name={cartItem.name}
                  image={cartItem.image}
                  handleClick={() => removeProductFromCart(cartItem)}
                  cart={true}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
