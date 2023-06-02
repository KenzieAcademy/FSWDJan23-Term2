import "./Form.css";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  error: "",
};

const PHONE_REGEX = /\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})/;

const minLength = (len, value) => value.length >= len;
const maxLength = (len, value) => value.length <= len;
const pattern = (regex, value) => new RegExp(regex).test(value);

const Form = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();

    if (!validateStringLength(formData.firstName, "First name", 2, 45)) return;
    if (!validateStringLength(formData.lastName, "Last name", 2, 45)) return;
    if (!validateStringLength(formData.message, "Message", 10, 45)) return;
    if (!validatePattern(formData.phone, PHONE_REGEX, "Phone")) return;

    alert(JSON.stringify(formData));
  };

  const clearErrors = () => setFormData((fd) => ({ ...fd, error: "" }));

  const validatePattern = (value, regex, name) => {
    if (!value) {
      setFormData((fd) => ({ ...fd, error: name + " is required." }));
      return false;
    }

    if (!pattern(regex, value)) {
      setFormData((fd) => ({
        ...fd,
        error:
          name + " does not match the given pattern. Check the placeholder.",
      }));
      return false;
    }

    return true;
  };

  const validateStringLength = (value, name, min, max) => {
    if (!value) {
      setFormData((fd) => ({ ...fd, error: name + " is required." }));
      return false;
    }
    if (!minLength(min, value)) {
      setFormData((fd) => ({
        ...fd,
        error: name + " must be at least " + min + " characters.",
      }));
      return false;
    } else if (!maxLength(max, value)) {
      setFormData((fd) => ({
        ...fd,
        error: name + " cannot be more than " + min + " characters.",
      }));
      return false;
    }

    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          minLength={2}
          maxLength={45}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          minLength={2}
          maxLength={45}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="you@provider.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          placeholder="(XXX)-XXX-XXXX"
          type="tel"
          name="phone"
          value={formData.phone}
          pattern="\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})"
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          placeholder="Message"
          type="text"
          name="message"
          value={formData.message}
          minLength={10}
          maxLength={500}
          onChange={handleChange}
        />
      </label>
      {formData.error && <p className="error-text">{formData.error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
