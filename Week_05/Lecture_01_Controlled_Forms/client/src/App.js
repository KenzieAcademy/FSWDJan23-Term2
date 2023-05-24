import { useEffect, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const initialFormData = {
  email: "",
  password: "",
};

const minLength = (value, length) => value.length >= length;
const maxLength = (value, length) => value.length <= length;
const required = (value) => value !== "";
const pattern = (value, pattern) => String(value).toLowerCase().match(pattern);
const min = (value, min) => Number(value) >= min;
const max = (value, max) => Number(value) <= max;

const validateEmail = (email) => {
  if (!required(email)) return "Email is required.";
  if (!pattern(email, EMAIL_REGEX)) return "Invalid email format.";

  return "";
};
const validatePassword = (password) => {
  if (!required(password)) return "Password is required.";
  if (!minLength(password, 8)) return "Password must be at least 8 characters.";
  if (!maxLength(password, 32))
    return "Password cannot be longer than 32 characters.";

  return "";
};

const ERROR_DICT = {
  email: validateEmail,
  password: validatePassword,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(initialFormData);

  const validate = (property, value) => {
    return ERROR_DICT[property](value);
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    setError((error) => ({
      ...error,
      [name]: validate(name, value),
    }));
  };

  const isValid = () => {
    return (
      !validate("email", formData.email) &&
      !validate("password", formData.password)
    );
  };

  const submitForm = (e) => {
    e.preventDefault();

    alert(
      "Thanks for your submission, your receipt will be sent to " +
        formData.email +
        ". Please come again!"
    );
    setFormData(initialFormData);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={inputChange}
          required={true}
          pattern={EMAIL_REGEX}
        />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={inputChange}
          />
        </div>
        {error.password && (
          <span className="error-text">
            Password is required and must be 8-32 characters.
          </span>
        )}
        <input type="submit" value="Submit" disabled={!isValid()} />
      </form>
    </div>
  );
}

export default App;
