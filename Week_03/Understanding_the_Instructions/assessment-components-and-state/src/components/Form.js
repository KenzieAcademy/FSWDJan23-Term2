import React, { useState } from "react";

const initialState = {
  name: "",
  age: "",
};

const Form = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  const reset = (e) => {
    setFormData(initialState);
  };

  const handleInputChange = (e) =>
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const handleHide = (e) => {
    e.preventDefault();

    reset();
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleHide}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
