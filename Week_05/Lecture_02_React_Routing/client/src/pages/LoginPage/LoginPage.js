import React, { useState } from "react";
import { TextInput, PasswordInput } from "../../components";
import { EMAIL_REGEX } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import useInputValidation from "../../hooks/useInputValidation";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = ({ handleAuth }) => {
  const [formData, setFormData] = useState(initialState);
  const { validatePattern, validateMinLength, validateRequired } =
    useInputValidation();
  /**
   * The useNavigate hook from react-router-dom
   * provides a function that can be used to navigate
   * to another page using react-router-dom's navigation
   */
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    if (
      !validateRequired(formData.email) ||
      !validatePattern(formData.email, EMAIL_REGEX)
    )
      return;
    if (
      !validateRequired(formData.password) ||
      !validateMinLength(formData.password, 8)
    )
      return;
    handleAuth(formData.email);
    /**
     * To use the navigate function to navigate to
     * another page, pass the destination url string
     * into the navigate function.
     */
    navigate("/dashboard");
  };

  const inputChange = (e) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));

  return (
    <div className="container">
      <h2>Welcome to the Rat Pack, please sign in!</h2>
      <form onSubmit={signIn}>
        <TextInput
          label="Email Address"
          name="email"
          value={formData.value}
          onChange={inputChange}
          autoComplete="off"
          required={true}
          pattern={EMAIL_REGEX}
        />
        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={inputChange}
          required={true}
          minLength={8}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default LoginPage;
