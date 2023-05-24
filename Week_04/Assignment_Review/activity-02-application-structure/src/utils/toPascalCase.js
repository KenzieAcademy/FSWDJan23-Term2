/**
 * Converts an input string to Pascal Case (first letter
 * of every word capitalized).
 * @param {string} str - input string
 * @returns {string} - str converted to pascal case
 */
export const toPascalCase = (str) => {
  return str
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ")
    .split("-")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join("-");
};
