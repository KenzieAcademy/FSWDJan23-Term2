import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialData = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [data, setData] = useState(initialData);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(data.username, data.password);
    navigate("/dashboard");
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const resetForm = () => setData(initialData);
  return (
    <Container>
      <h1>Sign in using your totally real and not fake account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            id="username"
            name="username"
            value={data.username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between">
          <Button type="button" variant="info" onClick={resetForm}>
            Reset
          </Button>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginPage;
