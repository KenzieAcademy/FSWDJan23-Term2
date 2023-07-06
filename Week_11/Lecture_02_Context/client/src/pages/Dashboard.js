import React from "react";
import { Container } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  /**
   * If the user is not authenticated, navigate to the login page
   */
  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <Container>
      <h1>This is a super high tech dashboard</h1>
      <p>You can do things. And even stuff!</p>
      <Outlet />
    </Container>
  );
};

export default Dashboard;
