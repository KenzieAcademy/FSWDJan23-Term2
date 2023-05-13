import React from "react";
import "./Athlete.css";

const Athlete = ({
  firstName,
  lastName,
  imgUrl,
  team,
  sport,
  number,
  championshipsWon,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="trading-card">
      <h3>
        {fullName} - #{number}
      </h3>
      <div className="card-photo-container">
        <img className="card-photo" src={imgUrl} alt={fullName} />
      </div>
      <p>
        {fullName} is a {sport} athlete playing for the {team}. They have won{" "}
        {championshipsWon} championships.
      </p>
    </div>
  );
};

export default Athlete;
