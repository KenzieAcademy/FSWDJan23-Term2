import React from "react";
import RosterMemberForm from "./RosterMemberForm";

const PositionTable = ({ position, players, setPlayers, isGoalie }) => {
  const addPlayer = (newPlayer) => setPlayers([...players, newPlayer]);

  return (
    <div className="container">
      <h5>{position}</h5>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              {isGoalie && (
                <>
                  <td>Glove Hand</td>
                  <td>Style</td>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={`${position}_${player.jerseyNum}`}>
                <td>
                  {player.firstName} {player.lastName}
                </td>
                <td>{player.jerseyNum}</td>
                {isGoalie && (
                  <>
                    <td>{player.gloveHand}</td>
                    <td>{player.style}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <RosterMemberForm
          title={`Add to ${position} Roster`}
          onSubmit={addPlayer}
          isGoalie={isGoalie}
        />
      </div>
    </div>
  );
};

export default PositionTable;
