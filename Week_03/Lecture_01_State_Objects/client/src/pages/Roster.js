import React, { useState } from "react";
import GoalieCard from "../components/GoalieRow";
import "./Roster.css";

const Roster = ({ centers, wingers, defenseMen, goalies: propGoalies }) => {
  const [goalies, setGoalies] = useState(propGoalies);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gloveHand: "left",
    imgUrl: "",
    style: "Standup",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const goaliesCopy = [...goalies];
  //   goaliesCopy.push(formData);
  //   setGoalies(goaliesCopy);
  // };

  // const handleSubmitImperative = (e) => {
  //   e.preventDefault();
  //   // Create the copy
  //   const copy = [];
  //   for (let i = 0; i < goalies.length; i++) {
  //     copy.push(goalies[i]);
  //   }
  //   // Modify the copy
  //   copy.push(formData);
  //   // Pass the copy into state
  //   setGoalies(copy);
  // };

  /**
   * If you're not a fan of spread operators, higher order functions, etc.,
   * remember that the steps for updating an object (or array) in state
   * are ALWAYS the same:
   * 1. Create a copy
   * 2. Update the copy
   * 3. Pass the copy into the setState function
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoalies([...goalies, formData]);
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDeleteGoalie = (e) =>
    setGoalies(
      goalies.filter((goalie) => goalie.jerseyNum !== Number(e.target.id))
    );

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>Goalies</th>
          </tr>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Number</th>
            <th>Glove Hand</th>
            <th>Goaltending Style</th>
            <th></th>
          </tr>
          {goalies.map((goalie) => (
            <tr key={`goalie_${goalie.jerseyNum}`}>
              <GoalieCard goalie={goalie} />
              <td
                className="delete"
                id={goalie.jerseyNum}
                onClick={handleDeleteGoalie}
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="roster-form">
        <form onSubmit={handleSubmit}>
          <h2>Add a new Goalie</h2>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="jerseyNum">Jersey Number:</label>
            <br />
            <input
              type="number"
              name="jerseyNum"
              id="jerseyNum"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="gloveHand">Glove Hand:</label>
            <br />
            <select
              name="gloveHand"
              id="gloveHand"
              onChange={handleInputChange}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div>
            <label htmlFor="imgUrl">Image URL:</label>
            <br />
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="style">Goaltending Style:</label>
            <br />
            <select name="style" id="style" onChange={handleInputChange}>
              <option value="standup">Standup</option>
              <option value="butterfly">Butterfly</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <input type="submit" value="Add to Roster" />
        </form>
      </div>
    </div>
  );
};

export default Roster;
