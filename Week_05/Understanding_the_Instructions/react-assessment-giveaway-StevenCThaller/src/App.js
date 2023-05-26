import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import "./App.css";
import OtherPage from "./components/OtherPage";

const App = () => {
  console.log("Whole app refreshes");
  return (
    <div>
      <h1>This is not inside of a route's page</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
      <h1>Neither is this</h1>
    </div>
  );
};

export default App;
