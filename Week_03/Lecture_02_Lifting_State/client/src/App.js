import { centers, wingers, defenseMen, goalies } from "./data";
import "./App.css";
import Roster from "./pages/Roster";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Roster
        centers={centers}
        wingers={wingers}
        defenseMen={defenseMen}
        goalies={goalies}
      /> */}
      <Counter initial={10} />
      <Counter />
    </div>
  );
}

export default App;
