import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const TeamRoster = () => {
  const { id } = useParams();
  const [roster, setRoster] = useState([]);

  const getTeamUrl = (teamId) =>
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`;

  useEffect(() => {
    fetch(getTeamUrl(id))
      .then((res) => res.json())
      .then((data) => setRoster(data.teams[0].roster.roster))
      .catch((err) => console.log("no team"));
  }, []);

  if (roster.length === 0) {
    return (
      <Container>
        <p>Could not find information on the requested team.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Roster</h1>
      <ul>
        {roster.map((player) => (
          <li key={player.person.id}>
            {player.person.fullName} #{player.jerseyNumber}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TeamRoster;
