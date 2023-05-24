/**
 * Find the max value in an array of numbers
 * @param {number[]} arr - Array of numbers
 */
export const findMax = (arr) => {
  let max = arr[0];
  arr.forEach((val) => (val > max ? val : max));
};
