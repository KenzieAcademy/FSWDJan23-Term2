import React from "react";
import { Navigate } from "react-router-dom";

const Confirmation = ({ email, cart }) => {
  if (!email || cart.length === 0) return <Navigate to="/dashboard" />;

  return (
    <div>
      <h1>Thank you for your selection!</h1>
      <p>Your receipt will be sent to {email} for the following items:</p>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Confirmation;
