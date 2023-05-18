import React, { useState } from "react";

const useForms = (initialState, validationCallback) => {
  const [form, setForm] = useState(initialState);

  const resetForm = () => setForm(initialState);

  const validateForm = () => validationCallback(form);

  const handleInputChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.checked });

  return {
    form,
    handleInputChange,
    handleCheckChange,
    resetForm,
    validateForm,
  };
};

export default useForms;
