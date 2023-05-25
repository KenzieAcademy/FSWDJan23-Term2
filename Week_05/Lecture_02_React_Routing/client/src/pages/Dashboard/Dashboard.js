import React, { useEffect } from "react";
import "./Dashboard.css";
import { Navigate } from "react-router-dom";

const Dashboard = ({ authUser }) => {
  console.log(authUser);

  if (!authUser.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
