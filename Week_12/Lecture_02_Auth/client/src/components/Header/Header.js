import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useThemePrefs from "../../hooks/useThemePrefs";

const Header = () => {
  const { theme } = useThemePrefs();
  return (
    <Navbar expand="sm" bg={theme} variant={theme} collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          App Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/protected" eventKey={1}>
              Protected Page
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" eventKey={3}>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/register" eventKey={4}>
              Create Account
            </Nav.Link>
            <Nav.Link as={Link} to="/preferences" eventKey={5}>
              Preferences
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
