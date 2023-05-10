import { centers, wingers, defenseMen, goalies } from "./data";
import "./App.css";
import Roster from "./pages/Roster";

function App() {
  return (
    <div className="App">
      <Roster
        centers={centers}
        wingers={wingers}
        defenseMen={defenseMen}
        goalies={goalies}
      />
    </div>
  );
}

export default App;
