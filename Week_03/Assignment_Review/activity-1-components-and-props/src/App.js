import Athlete from "./Athlete";
import "./App.css";

function App() {
  const athletes = [
    {
      firstName: "Patrick",
      lastName: "Mahomes",
      jerseyNum: 15,
      photo:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254",
      sportPlayed: "football",
      teamPlaysFor: "Kansas City Chiefs",
      ships: 2,
    },
    {
      firstName: "Jalen",
      lastName: "Hurts",
      jerseyNum: 1,
      photo:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040715.png&w=350&h=254",
      sportPlayed: "football",
      teamPlaysFor: "Philadelphia Eagles",
      ships: 0,
    },
    {
      firstName: "Wayne",
      lastName: "Gretzky",
      jerseyNum: 99,
      photo:
        "https://www.smelivenation.com/wp-content/uploads/2015/06/Wayne-Gretzky.png",
      sportPlayed: "hockey",
      teamPlaysFor: "Edmonton Oilers",
      ships: 4,
    },
  ];
  return (
    <div className="App">
      <h1>React Potato</h1>
      <div className="card-display">
        <Athlete
          firstName={athletes[0].firstName}
          lastName={athletes[0].lastName}
          imgUrl={athletes[0].photo}
          team={athletes[0].teamPlaysFor}
          number={athletes[0].jerseyNum}
          sport={athletes[0].sportPlayed}
          championshipsWon={athletes[0].ships}
        />
        <Athlete
          firstName={athletes[1].firstName}
          lastName={athletes[1].lastName}
          imgUrl={athletes[1].photo}
          team={athletes[1].teamPlaysFor}
          number={athletes[1].jerseyNum}
          sport={athletes[1].sportPlayed}
          championshipsWon={athletes[1].ships}
        />
        <Athlete
          firstName={athletes[2].firstName}
          lastName={athletes[2].lastName}
          imgUrl={athletes[2].photo}
          team={athletes[2].teamPlaysFor}
          number={athletes[2].jerseyNum}
          sport={athletes[2].sportPlayed}
          championshipsWon={athletes[2].ships}
        />
        <Athlete
          firstName="Jeff"
          lastName="Conine"
          imgUrl="https://cdn.vox-cdn.com/thumbor/7Z8QKh_WhNr1ok2wQSWhZxkhBDA=/0x0:3072x2048/920x613/filters:focal(1260x238:1750x728):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68895004/1404786.0.jpg"
          team="Florida Marlins"
          number={19}
          sport="baseball"
          championshipsWon={2}
        />
      </div>
    </div>
  );
}

export default App;
