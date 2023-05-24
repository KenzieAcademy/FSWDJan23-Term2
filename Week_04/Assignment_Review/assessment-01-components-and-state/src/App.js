import "./App.css";
import { Team } from "./components";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the sports game starter</h1>
      <Game
        venue="PNC Arena"
        homeTeam={{
          name: "Florida Panthers",
          logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/fla.png&h=200&w=200",
          colorPrimary: "darkred",
          colorSecondary: "darkblue",
          textColor: "white",
        }}
        awayTeam={{
          name: "Carolina Hurricanes",
          logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/car.png&h=200&w=200",
          colorPrimary: "black",
          colorSecondary: "red",
          textColor: "white",
        }}
      />
      <Game
        venue="Stinky Dallas Arena"
        homeTeam={{
          name: "Dallas Stars",
          logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/dal.png&h=200&w=200",
          colorPrimary: "white",
          colorSecondary: "green",
          textColor: "black",
        }}
        awayTeam={{
          name: "Vegas Golden Knights",
          logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/vgk.png&h=200&w=200",
          colorPrimary: "black",
          colorSecondary: "gold",
          textColor: "white",
        }}
      />
    </div>
  );
}

export default App;
