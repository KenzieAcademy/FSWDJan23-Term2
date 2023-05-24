import React, { useState } from "react";

const useValidation = () => {
  const [input, setInput] = useState();

  const minLength = (value, length) => value.length >= length;
  const maxLength = (value, length) => value.length <= length;
  const required = (value) => value !== "";
  const pattern = (value, pattern) =>
    String(value).toLowerCase().match(pattern);
  const min = (value, min) => Number(value) >= min;
  const max = (value, max) => Number(value) <= max;

  return;
};

export default useValidation;
