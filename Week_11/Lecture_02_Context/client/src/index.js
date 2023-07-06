import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./contexts/themeContext";
import AuthProvider from "./contexts/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * STEP 3: Provide the context to a component tree (i.e. wrap a component
 * in the provider)
 */
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
