import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// new Promise((resolve, reject) => {
//   // you perform logic with this function here

//   if (!not) {
//     reject();
//   }

//   // if everything works out, call
//   resolve();
// });
