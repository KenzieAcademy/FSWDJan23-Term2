import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          The Crew
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="yer-nav" />
        <Navbar.Collapse id="yer-nav">
          <Nav>
            <Nav.Link as={Link} to="/pirates">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/pirates/create">
              Create Pirate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
