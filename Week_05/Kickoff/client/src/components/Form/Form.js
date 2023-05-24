import React from "react";
import useForm from "../../hooks/useForm";
import useToggle from "../../hooks/useToggle";
import "./Form.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = ({ defaultSubscribe }) => {
  const { data, handleInputChange, handleCheckboxToggle, resetForm } = useForm({
    ...initialState,
    subscribeToList: defaultSubscribe ?? false,
  });
  const [isSubmitting, toggleIsSubmitting] = useToggle(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleIsSubmitting();
    prompt(
      `Thank you for your submission, ${data.firstName}.${
        data.subscribeToList
          ? " Thank you for signing up!"
          : " You will not receive any marketing emails."
      }`
    );
    resetForm();
    toggleIsSubmitting();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={data.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={data.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="subscribeToList">
          Subscribe to our mailing list for updates that aren't totally useless
          and that you'll definitely actually look at. Really who even likes
          getting these emails? And why does every single website in existence{" "}
          <strong>NEED</strong> a mailing list? I don't need to get emails from
          you every single time that you have a new thought. I just needed to
          buy some rubber bands ONE time!
        </label>
        <input
          type="checkbox"
          name="subscribeToList"
          id="subscribeToList"
          checked={data.subscribeToList}
          onChange={handleCheckboxToggle}
        />
      </div>
      <div>
        <input type="button" onClick={resetForm} value="Reset" />
        <input
          type="submit"
          value="Submit"
          disabled={isSubmitting || !data.firstName}
        />
      </div>
    </form>
  );
};

export default Form;
