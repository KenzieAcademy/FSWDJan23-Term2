import React from "react";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  imgUrl: "",
  jerseyNum: "",
  gloveHand: "left",
  style: "Standup",
};

const RosterMemberForm = ({ title, onSubmit, isGoalie = false }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isGoalie) {
      const { gloveHand, style, ...nonGoalie } = formData;

      onSubmit(nonGoalie);
    } else {
      onSubmit(formData);
    }
    setFormData(initialState);
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
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
          value={formData.lastName}
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
          value={formData.jerseyNum}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="imgUrl">Image URL:</label>
        <br />
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          value={formData.imgUrl}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>
      {isGoalie && (
        <>
          <div>
            <label htmlFor="gloveHand">Glove Hand:</label>
            <br />
            <select
              name="gloveHand"
              id="gloveHand"
              value={formData.gloveHand}
              onChange={handleInputChange}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div>
            <label htmlFor="style">Goaltending Style:</label>
            <br />
            <select
              name="style"
              id="style"
              value={formData.style}
              onChange={handleInputChange}
            >
              <option value="standup">Standup</option>
              <option value="butterfly">Butterfly</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </>
      )}
      <input type="submit" value="Add to Roster" />
    </form>
  );
};

export default RosterMemberForm;
