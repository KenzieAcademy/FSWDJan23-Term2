import React from "react";

const ConditionalRendering = () => {
  const team = {
    location: "Florida",
    teamName: "Panthers",
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nhl/500/fla.png&h=200&w=200",
    wins: 42,
    losses: 32,
    otl: 8,
    areInPlayoffs: false,
    stillInNHL: false,
  };

  if (!team.stillInNHL) {
    return (
      <p>
        The {team.location} {team.teamName} is no longer in existence :(
      </p>
    );
  }

  /**
   * Ternary operators are conditional expressions;
   * the resulting value differs based on the conditional
   * resolution.
   */
  // const playoffStatusIcon = team.areInPlayoffs ? (
  //   <img className="playoff-logo" src="./Stanley_Cup_Playoffs_logo.png" />
  // ) : (
  //   <span className="text-red">X</span>
  // );

  // let itemToDisplayAfterTeamName;
  // if (team.areInPlayoffs) {
  //   itemToDisplayAfterTeamName = (
  //     <img className="playoff-logo" src="./Stanley_Cup_Playoffs_logo.png" />
  //   );
  // } else {
  //   itemToDisplayAfterTeamName = <span className="text-red">X</span>;
  // }

  return (
    <div>
      <h1>
        {team.location} {team.teamName}{" "}
        {team.areInPlayoffs ? (
          <img className="playoff-logo" src="./Stanley_Cup_Playoffs_logo.png" />
        ) : (
          <span className="text-red">X</span>
        )}
      </h1>
      <p>
        Record:{" "}
        <span className={team.wins > team.losses && "text-green"}>
          {team.wins} - {team.losses} - {team.otl}
        </span>
      </p>
      {team.areInPlayoffs && (
        <img src={team.logo} alt={`${team.location} ${team.teamName} logo`} />
      )}
    </div>
  );
};

export default ConditionalRendering;
