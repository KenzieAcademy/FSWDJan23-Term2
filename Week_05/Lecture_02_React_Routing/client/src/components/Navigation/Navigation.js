import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ logOut }) => {
  return (
    <nav className="top-nav">
      <div className="container">
        <Link to="" className="nav-brand">
          Rat Pack
        </Link>
        <div className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
