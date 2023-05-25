const useInputValidation = () => {
  const validateMinLength = (value, length) => value.length >= length;
  const validateMaxLength = (value, length) => value.length <= length;
  const validateRequired = (value) => value !== "";
  const validatePattern = (value, pattern) =>
    String(value).toLowerCase().match(pattern);
  const validateMin = (value, min) => Number(value) >= min;
  const validateMax = (value, max) => Number(value) <= max;

  return {
    validateMinLength,
    validateMaxLength,
    validateRequired,
    validatePattern,
    validateMin,
    validateMax,
  };
};

export default useInputValidation;
