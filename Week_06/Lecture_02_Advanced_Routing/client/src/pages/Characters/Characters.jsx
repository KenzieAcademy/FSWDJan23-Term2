/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Button, Container, Row, Col, Spinner, Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import extractCategoryAndId from "../../utils/extractCategoryAndId";

const Characters = ({ next, previous, people, fetchPeople }) => {
  useEffect(() => {
    fetchPeople();
  }, []);

  console.log(people);

  return (
    <Container>
      <Row as="section">
        <h2>Star Wars Characters</h2>
        <Col xs={12} md={6} lg={8}>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>No. Films</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {people.map((character, i) => (
                <tr key={`character-${i}`}>
                  <td>{character.name}</td>
                  <td>{character.birth_year}</td>
                  <td>{character.films.length}</td>
                  <td>
                    <Button
                      as={Link}
                      to={extractCategoryAndId(character.url)}
                      variant="info"
                      size="sm"
                    >
                      Info
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {people.length === 0 && (
            <Row className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Row>
          )}
          <Row className="d-flex justify-content-center">
            <Col
              as={Button}
              xs={5}
              variant="primary"
              size="sm"
              disabled={!previous}
              onClick={() => fetchPeople(previous)}
            >
              Previous
            </Col>
            <Col
              as={Button}
              xs={{ span: 5, offset: 2 }}
              variant="primary"
              size="sm"
              disabled={!next}
              onClick={() => fetchPeople(next)}
            >
              Next
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={4}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Characters;
