import Team from "../Team/Team";

const Game = ({ venue, homeTeam, awayTeam }) => {
  return (
    <div>
      <h2>Welcome to {venue}</h2>
      <div className="matchup">
        <Team
          name={homeTeam.name}
          logo={homeTeam.logo}
          colorPrimary={homeTeam.colorPrimary}
          colorSecondary={homeTeam.colorSecondary}
          textColor={homeTeam.textColor}
        />
        <span className="vs">VS</span>
        <Team
          name={awayTeam.name}
          logo={awayTeam.logo}
          colorPrimary={awayTeam.colorPrimary}
          colorSecondary={awayTeam.colorSecondary}
          textColor={awayTeam.textColor}
        />
      </div>
    </div>
  );
};

export default Game;
