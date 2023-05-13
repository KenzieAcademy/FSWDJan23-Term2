import { useState } from "react";
import "./App.css";
import shotSound from "./sounds/hockeystick.mp3";
import scoreSound from "./sounds/Vanc2.mp3";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container row">
        <SideNav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
