import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const TeamStats = () => {
  const { id } = useParams();
  const [stats, setStats] = useState();

  const getTeamUrl = (teamId) =>
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`;

  useEffect(() => {
    fetch(getTeamUrl(id))
      .then((res) => res.json())
      .then((data) => setStats(data.teams[0].teamStats[0]))
      .catch((err) => console.log("no team"));
  }, []);

  console.log(stats);

  if (!stats) {
    return (
      <Container>
        <p>Could not find stats on the requested team.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Stats</h1>
    </Container>
  );
};

export default TeamStats;
