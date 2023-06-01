import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./AllTeamsPage.module.css";

const ALL_TEAMS_URL = "https://statsapi.web.nhl.com/api/v1/teams";

const AllTeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(ALL_TEAMS_URL)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <Container>
      <h2 className="title">Select a Team from the list to see more details</h2>
      <Row as="ul" className={style.teamList}>
        {teams.map((team) => (
          <Col key={team.id} as="li" xs={12} md={4} lg={3}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTeamsPage;
