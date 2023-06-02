import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
};

export default App;
