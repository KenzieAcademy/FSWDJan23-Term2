import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Elite Dangerous Ship DB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav>
            <Nav.Link as={Link} to="/ships/create">
              Create Ship
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
