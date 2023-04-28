// Object Equality Katas

// All of these functions should be PURE and have NO SIDE EFFECTS.
// Do not modify any of the input objects
// Always create a new array or object when returning
// For all functions, find instructions on MyKenzie.

// There are unit tests in `tests.js`.  These tests will automatically run in the console.

const isTheSameObject = function (a, b) {
  // Your Code Here!
  return a === b;
};

const isTheSameObjectShallow = function (a, b) {
  // 1. Ensure that both objects have the same number of properties first
  //    this is a "fast fail".
  // 2. Iterate through the keys in a, comparing them to the same key in b
  //    i.e. if(a[key] !== b[key]) return false
  // Your Code Here!
  return true;
};

const haveSameStructure = function (a, b) {
  // Your Code Here!
  return false;
};

const createShallowCopy = function (object) {
  // Your Code Here!
  return {};
};

const combineArrays = function (arrayOne, arrayTwo) {
  // Your Code Here!
  return [];
};

const combineObjects = function (objectOne, objectTwo) {
  // Your Code Here!
  return {};
};

const copyObjectAndAddProperty = function (object, property, value) {
  return {};
};

// STRETCH GOALS

const isTheSameObjectDeep = function (a, b) {
  // Your Code Here!
  return false;
};

export {
  combineArrays,
  combineObjects,
  copyObjectAndAddProperty,
  createShallowCopy,
  haveSameStructure,
  isTheSameObject,
  isTheSameObjectDeep,
  isTheSameObjectShallow,
};
