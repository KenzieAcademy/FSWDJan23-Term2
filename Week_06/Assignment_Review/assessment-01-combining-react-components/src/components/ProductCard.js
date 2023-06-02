import React from "react";

const ProductCard = ({ name, image, handleClick, cart = false }) => {
  return (
    <div className="product-card">
      <p className="title">{name}</p>
      <img className="product-image" src={image} alt={name} />
      <button className="product-select" onClick={handleClick}>
        {cart ? "Remove Product" : "Add Product"}
      </button>
    </div>
  );
};

export default ProductCard;
