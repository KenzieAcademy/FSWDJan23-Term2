import { useState } from "react";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);

  const handleInputChange = (e) =>
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));

  const handleCheckboxToggle = (e) =>
    setData((data) => ({ ...data, [e.target.name]: e.target.checked }));

  const resetForm = () => setData((data) => initialData);

  return {
    data,
    handleInputChange,
    handleCheckboxToggle,
    resetForm,
  };
};

export default useForm;
