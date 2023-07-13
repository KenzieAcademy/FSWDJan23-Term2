import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialData = {
  username: "",
  password: "",
};

const SigninPage = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(data.username, data.password);
      navigate("/preferences");
    } catch (error) {
      setErrors(error.response.data);

      toast.error("Sign in failed, check the form for details.");
    }
  };

  const handleInputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Container>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleInputChange}
            isInvalid={errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            isInvalid={errors.username || errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit" variant="primary" size="md">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SigninPage;
