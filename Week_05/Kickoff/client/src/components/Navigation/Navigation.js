import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Kickoff Home</Link>
      {" | "}
      <Link to="/controlledforms">Controlled Forms</Link>
    </div>
  );
};

export default Navigation;
