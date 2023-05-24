import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * BrowserRouter will wrap our application in a pre-built
 * component that will allow us to designate components to
 * render at a given route.
 *
 * It will also grant us the ability to use other pre-built
 * components from the same react-router-dom library that will
 * allow us to navigate without refreshing the application.
 */
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
