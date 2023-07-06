import { useContext } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { themeContext } from "../contexts/themeContext";
import useAuth from "../hooks/useAuth";

const Header = () => {
  /**
   * STEP 4: Consume the context through the use of the `useContext` hook,
   * and the context created in step 1
   */
  const { theme, toggleTheme } = useContext(themeContext);
  const { username, isAuthenticated, signOut } = useAuth();

  return (
    <Navbar expand="lg" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Context API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to={`/dashboard/${username}`}>
                  My Profile
                </Nav.Link>
                <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Form.Group className="d-flex gap-1 align-items-center">
              <Nav.Link as="span">Light</Nav.Link>
              <Form.Switch checked={theme === "dark"} onChange={toggleTheme} />
              <Nav.Link as="span">Dark</Nav.Link>
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
