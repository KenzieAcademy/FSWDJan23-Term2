import React, { useState } from "react";
import "./Roster.css";
import PositionTable from "../components/PositionTable";

const Roster = ({
  centers: propCenters,
  wingers: propWingers,
  defenseMen: propDefenseMen,
  goalies: propGoalies,
}) => {
  const [centers, setCenters] = useState(propCenters);
  const [wingers, setWingers] = useState(propWingers);
  const [defenseMen, setDefenseMen] = useState(propDefenseMen);
  const [goalies, setGoalies] = useState(propGoalies);

  return (
    <div className="container">
      <h4>Forwards</h4>
      <PositionTable
        position="Center"
        players={centers}
        setPlayers={setCenters}
      />
      <PositionTable
        position="Winger"
        players={wingers}
        setPlayers={setWingers}
      />
      <h4>Defense</h4>
      <PositionTable
        position="Defensemen"
        players={defenseMen}
        setPlayers={setDefenseMen}
      />
      <h4>Goalies</h4>
      <PositionTable
        position="Goalie"
        players={goalies}
        setPlayers={setGoalies}
        isGoalie
      />
    </div>
  );
};

export default Roster;
