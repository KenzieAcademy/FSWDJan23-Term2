import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useThemePrefs from "../hooks/useThemePrefs";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PreferencesPage = () => {
  const { theme, toggleTheme } = useThemePrefs();
  const { isAuthorized } = useAuth();

  if (!isAuthorized(3)) {
    toast.error("Please log in to access this page.");
    return <Navigate to="/login" />;
  }

  return (
    <Container as="main">
      <h1>Preferences</h1>
      <Row as="section">
        <Col as="h2" xs={12}>
          Theme
        </Col>
        <Col as={Form.Group} className="d-flex align-items-center gap-2">
          <Form.Label as="span">Light</Form.Label>
          <Form.Switch
            name="theme"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <Form.Label as="span">Dark</Form.Label>
        </Col>
      </Row>
    </Container>
  );
};

export default PreferencesPage;
