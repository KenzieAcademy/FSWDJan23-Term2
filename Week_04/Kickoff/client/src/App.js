import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import SeparationWhat from "./components/SeparationWhat";
import UsingEffects from "./components/UsingEffects/UsingEffects";

function App() {
  const [inNet, setInNet] = useState(true);
  return (
    <div className="App">
      <button className="btn btn-danger" onClick={() => setInNet(false)}>
        Pull Goalie
      </button>
      {inNet && <UsingEffects />}
    </div>
  );
}

export default App;
