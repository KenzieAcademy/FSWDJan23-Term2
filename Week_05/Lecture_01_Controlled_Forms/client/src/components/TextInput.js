import React, { useState } from "react";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  autoComplete = "off",
  required = false,
  pattern = "",
}) => {
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateMinLength = (value, length) => value.length >= length;
  const validateMaxLength = (value, length) => value.length <= length;
  const validateRequired = (value) => value !== "";
  const validatePattern = (value, pattern) =>
    String(value).toLowerCase().match(pattern);
  const validateMin = (value, min) => Number(value) >= min;
  const validateMax = (value, max) => Number(value) <= max;

  const handleChange = (e) => {
    setError("");
    setIsValid(true);
    if (!touched) setTouched(true);
    if (required && !validateRequired(e.target.value)) {
      setIsValid(false);
      setError(`Field ${name} is required.`);
    }
    if (pattern && !validatePattern(e.target.value, pattern)) {
      setIsValid(false);
      setError(`Field ${name} does not match the required pattern.`);
    }
    onChange(e);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={
          !isValid ? "input-error" : isValid && touched ? "input-success" : ""
        }
        type="text"
        name={name}
        id={name}
        autoComplete={autoComplete}
        value={value}
        onChange={handleChange}
      />
      {touched && !isValid && <span className="error-text">{error}</span>}
    </div>
  );
};

export default TextInput;
