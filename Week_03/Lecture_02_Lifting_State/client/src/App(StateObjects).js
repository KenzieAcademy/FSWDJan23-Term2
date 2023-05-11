import { useState } from "react";
import "./App.css";

function App() {
  const [team, setTeam] = useState({
    teamLocation: "Florida",
    teamName: "Panthers",
    arenaName: "FLA Live Arena",
    arenaLocation: "Sunrise, FL",
    inauguralYear: 1993,
    hasWonCup: false,
  });

  console.log("An update to state has been detected by React.");

  // const grantLordStanleysCup = (e) => {
  //   /**
  //    * To update an object in state, we actually need to create an entirely new
  //    * copy of the object.
  //    */
  //   const newTeamCopy = { ...team };
  //   // Make changes to the new copy
  //   newTeamCopy.hasWonCup = e.target.checked;
  //   // Save that object back to state
  //   setTeam(newTeamCopy);
  // };

  /**
   * These two functions (handleCheckChange and handleInputChange)
   * are going to be your best friends. Gas 'em up, remember 'em,
   * and use 'em.
   */
  const handleCheckChange = (e) =>
    setTeam({
      ...team,
      [e.target.name]: e.target.checked,
    });

  const handleInputChange = (e) =>
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="App">
      <h1>
        Team: {team.teamLocation} {team.teamName}
      </h1>
      <p>Have Won a Cup: {team.hasWonCup ? "Yes" : "No"}</p>
      <label>
        Give them a cup?
        <input type="checkbox" onChange={handleCheckChange} />
      </label>
      <br />
      <label>
        Team Location:
        <input type="text" name="teamLocation" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Team Name:
        <input type="text" name="teamName" onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default App;
