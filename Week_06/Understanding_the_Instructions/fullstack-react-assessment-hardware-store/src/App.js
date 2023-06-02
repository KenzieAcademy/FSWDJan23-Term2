import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigation, ProductList } from "./components/index";
import { HomePage, ProductsPage } from "./pages";
import products from "./products";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({ productList: products });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Welcome to Kenzie Hardware!</h1>
        <Navigation />
      </div>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route
            path=""
            element={<ProductList productList={state.productList} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
