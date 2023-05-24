import React, { useRef, useState } from "react";
import "./Team.css";

const initialState = {
  score: 0,
  shotsTaken: 0,
};

const Team = ({
  name,
  logo,
  colorPrimary = "white",
  colorSecondary = "black",
  textColor = "black",
}) => {
  const [stats, setStats] = useState(initialState);
  /**
   * Generate a random % on component mount.
   * That random % will be used to determine
   * whether a shot goes in or not.
   */
  const randomChance = useRef(Math.random());

  /**
   * Increases state's shotsTaken by 1
   */
  const incrementShots = () =>
    setStats((s) => ({ ...s, shotsTaken: s.shotsTaken + 1 }));

  /**
   * Compares a random number to the initialized
   * randomChance. If the random number is greater,
   * increment state's score by 1
   */
  const scoreMaybe = () => {
    if (Math.random() > randomChance.current) {
      setStats((s) => ({ ...s, score: s.score + 1 }));
    }
  };

  const handleShoot = (e) => {
    incrementShots();
    scoreMaybe();
  };

  return (
    <div
      className="team"
      style={{
        borderColor: colorSecondary,
        backgroundColor: colorPrimary,
        color: textColor,
      }}
    >
      <h1>{name}</h1>
      <div className="logo-container">
        <img src={logo} alt={name} />
      </div>
      <div className="row play-box">
        <button onClick={handleShoot}>SHOOT</button>
        <div className="stats-box">
          <h4 className="stats-header">STATS</h4>
          <table>
            <tbody>
              <tr>
                <th>Goals:</th>
                <td>{stats.score}</td>
              </tr>
              <tr>
                <th>Shots:</th>
                <td>{stats.shotsTaken}</td>
              </tr>
              <tr>
                <th>Shot Pct:</th>
                <td>
                  {stats.shotsTaken
                    ? `${((stats.score / stats.shotsTaken) * 100).toFixed(1)}%`
                    : "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;
