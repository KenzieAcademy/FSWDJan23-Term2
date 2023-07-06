import React, { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { themeContext } from "../contexts/themeContext";

const UserProfile = () => {
  const { username, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useContext(themeContext);

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <Container>
      <h2>Welcome, {username}</h2>
      <p>You can "change your profile info" on this page</p>
      <Form.Group>
        <Form.Label>Select Theme</Form.Label>
        <Form.Select value={theme} onChange={toggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Form.Select>
      </Form.Group>
    </Container>
  );
};

export default UserProfile;
