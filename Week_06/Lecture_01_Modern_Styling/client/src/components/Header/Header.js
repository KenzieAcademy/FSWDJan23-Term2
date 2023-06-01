import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" as="header" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Modern App Design
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse id="my-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="This Week's Topics" id="topics">
              <NavDropdown.Item as={Link} to="/mediaqueries">
                Media Queries
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bootstrap">
                React Bootstrap
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cssmodules">
                CSS Modules
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
