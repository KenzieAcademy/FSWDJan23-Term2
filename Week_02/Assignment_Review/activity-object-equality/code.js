// Object Equality Katas

// All of these functions should be PURE and have NO SIDE EFFECTS.
// Do not modify any of the input objects
// Always create a new array or object when returning
// For all functions, find instructions on MyKenzie.

// There are unit tests in `tests.js`.  These tests will automatically run in the console.

const isTheSameObject = function (a, b) {
  return a === b;
};

const isTheSameObjectShallow = function (a, b) {
  if (a === b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key) => b.hasOwnProperty(key) && a[key] === b[key]);
};

const haveSameStructure = function (a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key) => b.hasOwnProperty(key));
};

const createShallowCopy = function (object) {
  return { ...object };
};

const combineArrays = function (arrayOne, arrayTwo) {
  // Your Code Here!
  return [...arrayOne, ...arrayTwo];
};

const combineObjects = function (objectOne, objectTwo) {
  // Your Code Here!
  return { ...objectOne, ...objectTwo };
};

const copyObjectAndAddProperty = function (object, property, value) {
  return { ...object, [property]: value };
};

// STRETCH GOALS

const isTheSameObjectDeep = function (a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key) => {
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      return isTheSameObjectDeep(a[key], b[key]);
    } else if (b.hasOwnProperty(key) && a[key] !== b[key]) {
      return false;
    } else {
      return true;
    }
  });
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
