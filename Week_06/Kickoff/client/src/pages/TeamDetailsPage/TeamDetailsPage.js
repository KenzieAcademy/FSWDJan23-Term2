import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

const TeamDetailsPage = () => {
  const [team, setTeam] = useState();

  const { id } = useParams();

  const getTeamUrl = (teamId) =>
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.schedule.next`;

  useEffect(() => {
    fetch(getTeamUrl(id))
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);

  if (!team)
    return (
      <Container>
        <p>Loading...</p>;
      </Container>
    );

  console.log(team);

  return (
    <Container>
      <h1 className="title">{team.name}</h1>
      <span>Est. {team.firstYearOfPlay}</span>
      <Row>
        {team.nextGameSchedule !== undefined && (
          <p>
            Next Game:{" "}
            {new Date(team.nextGameSchedule.dates[0].date).toLocaleString(
              "en-us"
            )}{" "}
          </p>
        )}
        <p>Home Arena: {team.venue.name}</p>
      </Row>
      <Row>
        <Col as={Link} to={`/teams/${id}/roster`}>
          Roster
        </Col>
        <Col as={Link} to={`/teams/${id}/stats`}>
          Stats
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
};

export default TeamDetailsPage;
