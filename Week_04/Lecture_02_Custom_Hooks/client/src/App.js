import "./App.css";
import { HockeyPlayer } from "./components";

function App() {
  return (
    <div className="container">
      <HockeyPlayer
        name="Aleksander Barkov"
        number={16}
        position="Center"
        imgUrl="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3041970.png&w=350&h=254"
      />
    </div>
  );
}

export default App;
