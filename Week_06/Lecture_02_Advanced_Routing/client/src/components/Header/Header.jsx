import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="md" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Advanced Routing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-navbar" />
        <Navbar.Collapse id="my-navbar">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/people">
              Characters
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
