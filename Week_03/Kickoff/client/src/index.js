import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function findElementIndex(arr, candidate) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      return i;
    }
  }

  return false;
}
