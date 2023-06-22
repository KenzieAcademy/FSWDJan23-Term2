/* eslint-disable react/prop-types */
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PirateTable = ({ pirates, prevPage, nextPage, handleDelete }) => {
  if (!pirates)
    return (
      <>
        <Table striped bordered size="md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Nickname</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <Table striped bordered size="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Nickname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pirates &&
            pirates.map((pirate) => (
              <tr key={pirate._id}>
                <td>{pirate.name}</td>
                <td>{pirate.nickName}</td>
                <td>
                  <Button
                    type="link"
                    as={Link}
                    to={`/pirates/${pirate._id}`}
                    variant="info"
                    size="xs"
                  >
                    Details
                  </Button>
                  {" | "}
                  <Button
                    type="link"
                    as={Link}
                    to={`/pirates/${pirate._id}/edit`}
                    variant="info"
                    size="x"
                  >
                    Edit
                  </Button>
                  {" | "}
                  <Button
                    type="button"
                    variant="danger"
                    size="xs"
                    onClick={() => handleDelete(pirate._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Container>
        <Row className="d-flex justify-content-between">
          <Col
            as={Button}
            xs={6}
            md={3}
            lg={2}
            type="button"
            variant="info"
            size="md"
            disabled={!prevPage}
            onClick={prevPage}
          >
            Prev
          </Col>
          <Col
            as={Button}
            xs={6}
            md={3}
            lg={2}
            type="button"
            variant="info"
            size="md"
            disabled={!nextPage}
            onClick={nextPage}
          >
            Next
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PirateTable;
