import React, { useState } from "react";
import { useHockeyGame } from "../../hooks";

const HockeyPlayer = ({ name, position, number, imgUrl }) => {
  const {
    goals,
    assists,
    hits,
    shotsBlocked,
    additionalStats,
    passPuck,
    shootPuck,
    truckStick,
    dive,
  } = useHockeyGame();

  const [state, setState] = useState("something");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 row">
          <h4 className="col col-12">
            {name} - #{number}
          </h4>
          <div className="col col-12">
            <img src={imgUrl} alt={name} />
          </div>
          <p>Position: {position}</p>
        </div>
        <div className="col-6">
          <h5>Stats</h5>
          <ul>
            <li>Shots: {additionalStats.shotsTaken}</li>
            <li>
              Goals: {goals}{" "}
              {additionalStats.shotsTaken
                ? `(${(goals / additionalStats.shotsTaken) * 100}%)`
                : ""}
            </li>
            <li>Assists: {assists}</li>
            <li>Hits: {hits}</li>
            <li>Shots Blocked {shotsBlocked}</li>
            <li>Penalties: {additionalStats.penalties}</li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <button onClick={passPuck} className="btn btn-info btn-sm">
          Pass
        </button>
        <button onClick={shootPuck} className="btn btn-info btn-sm">
          Shoot
        </button>
        <button onClick={truckStick} className="btn btn-info btn-sm">
          Check Player
        </button>
        <button onClick={dive} className="btn btn-info btn-sm">
          Get Down Mr. President
        </button>
      </div>
    </div>
  );
};

export default HockeyPlayer;
