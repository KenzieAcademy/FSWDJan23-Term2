/**
 * VOCAB
 * Scope - where a given variable/function/piece of data
 *    can be accessed. For loops, objects, functions, etc.
 *    all have their own scope. Different ways to declare
 *    variables differ not only in how they are stored in
 *    memory (i.e. const is a consistent size once declared
 *    but var and let can have their values changed), but also
 *    how they are scope limited.
 * Hoisting - determines when a variable/function can be accessed
 *    in relation to where it is declared. Functions declared with
 *    the function keyword are hoisted both in definition and
 *    declaration (i.e. you can call a function on a line before the
 *    function definition)
 * Pure Function - a function that does not have any side effects (i.e.
 *    it does not affect, in any way, any data that is not provided
 *    directly to the function)
 */

const names = ["Nicko", "Bruce", "Janick", "Dave", "Adrian", "Steve"];

const bandMembers = [
  {
    firstName: "Nicko",
    lastName: "McBrain",
    instrument: "Drums",
    age: 70,
  },
  {
    firstName: "Bruce",
    lastName: "Dickinson",
    instrument: "Vocals",
    age: 64,
  },
  {
    firstName: "Janick",
    lastName: "Gers",
    instrument: "Guitar",
    age: 66,
  },
  {
    firstName: "Dave",
    lastName: "Murray",
    instrument: "Guitar",
    age: 66,
  },
  {
    firstName: "Adrian",
    lastName: "Smith",
    instrument: "Guitar",
    age: 66,
  },
  {
    firstName: "Steve",
    lastName: "Harris",
    instrument: "Bass",
    age: 67,
  },
];
/**
 * Higher Order Functions
 *
 * A higher order function is simply a function that accepts a function as an argument.
 */

// console.log("******** BASIC FOR LOOP **********");
// for (let i = 0; i < names.length; i++) {
//   // ^ Code that is the same
//   console.log(names[i]); // < Code that is NOT the same
// } // < Code that is the same
// console.log("**********************************");

// for (let i = 0; i < names.length; i++) {
//   // ^ Code that is the same
//   console.log(names[i][0]); // < Code that is NOT the same
// } // < Code that is the same
/**
 * To identify how/when to use (or even create) a higher order function,
 * start by identifying the lines of code that are **always** the same.
 *
 * Then, identify the code that is **different**, so we know what to pull
 * into a callback function
 *
 * Finally, take the code that **is** the same, and put it into a function.
 * Then, take the code that is **not** the same, and replace with a callback
 * execution
 */
function iDontWantToWriteForLoops(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// iDontWantToWriteForLoops(names);

/**
 * Callback Functions
 *
 * Callback functions are simply functions passed into a higher order
 * function as an argument. The most important thing to consider
 * when utilizing callback functions is that you should NEVER call
 * the function as it is passed into the higher order function.
 */

/**
 * In the example that prints the string,
 * we're looking to make a function that accepts
 * a string as a parameter, and console.log() it
 */

// function printName(name) {
//   console.log(name);
// }

// // Then, once that function is defined, we can use it
// // as a callback function:
// console.log("******** USING HOF **********");
// iDontWantToWriteForLoops(names, printName);
// console.log("**********************************");

/**
 * We can also cut down on the amount of excess code
 * needed by using anonymous functions;
 *
 * an anonymous function is a function that is not
 * assigned to any kind of keyword
 */
// console.log("******** USING HOF + Anonymous Callback **********");
// iDontWantToWriteForLoops(names, function (name) {
//   console.log(name);
// });
// console.log("**********************************");

/**
 * Arrow Functions
 *
 * Arrow functions are, for most scenarios, the same
 * as a regular function.
 *
 * An arrow function is a method of defining a function
 * that cuts away some of the excess verbage
 */

// Traditional function declaration:
function sumTrad(num1, num2) {
  // The instructions to be executed on calling
  // this function are put in the body.
  return num1 + num2;
}

// Arrow function:
const sumArrow = (num1, num2) => {
  return num1 + num2;
};
/**
 * NOTE: variables declared using the var keyword
 * have their declaration hoisted, but not their
 * definition.
 */

// console.log("TRADITIONAL FUNCTION");
// console.log(sumTrad(5, 2));

// console.log("ARROW FUNCTION");
// console.log(sumArrow(5, 2));

console.log("******** USING HOF + Arrow Callback **********");
iDontWantToWriteForLoops(names, (name) => console.log(name));
console.log("**********************************");

/**
 * Common Higher Order Functions
 *
 * For the purposes of this course, we are going to focus specifically
 * on built-in array methods that are higher order functions
 *
 * Documention (Check out the methods subsection on the left):
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Array.forEach()
 *
 * The .forEach() method accepts a callback that is to be run once for
 * each element in the array the method is called off.
 *
 * The .forEach() method does not return anything, and neither does
 * its callback need to return anything.
 */

/**
 * This example will print each name in the
 * names array
 */
names.forEach((name) => console.log(name));

/**
 * This example will print just the first character
 * of each name
 */
names.forEach((name) => console.log(name[0]));

/**
 * Most array higher order functions are built in a way
 * that the callback provided can accept between 1 and 3 arguments.
 *
 * The 3 parameters expected are:
 *  1. the individual element
 *  2. the index
 *  3. the array itself
 */
names.forEach((name, i) => console.log(i + 1 + " - " + name));

/**
 * If you need to modify the original array, use that 3rd
 * parameter of the callback
 */

// This example replaces each name with just the first letter
// names.forEach((name, i, arr) => (arr[i] = name[0]));

/**
 * Array.map()
 *
 * The .map() function is somewhat similar to .forEach(), but
 * it differs both in what .map() itself returns, and what its
 * callback should return.
 *
 * .map() creates a new array, and populates it with what is returned
 * by each execution of the provided callback.
 */

/**
 * The callback function provided to Array.map() MUST return something
 */

let firstChars = names.map((name) => name[0]);

let bandDetails = bandMembers
  .map(
    (member) => `
  <li>
    <p>${member.firstName} ${member.lastName}</p>
    <p>Age: ${member.age}</p>
    <p>Instrument: ${member.instrument}</p>
  </li>
`
  )
  .forEach((htmlString) => {
    const ul = document.getElementById("ironmaiden");
    ul.innerHTML += htmlString;
  });

/**
 * Array.some()
 *
 * The .some() method is used to determine if an element
 * matching a condition exists in an array.
 *
 * The .some() method accepts a callback that returns true
 * or false, and is executed for each element in the array
 * UNTIL it returns true
 *
 * The .some() method WILL NOT provide the element that
 * satisfied the condition. That's another higher order function.
 */

const areAnyPreRetirement = bandMembers.some((member) => member.age < 65);
// console.log(areAnyPreRetirement);

/**
 * Array.every()
 *
 * The .every() method is just like .some(), except rather than
 * returning true if ONE element satisfies the callback's condition,
 * it returns true if EVERY element satisifies the callback's condition.
 *
 * Like the .some() method, it will return early. But in the case of .every(),
 * rather than returning on the first true condition, it will return early
 * on the first false condition.
 *
 * Also like .some(), .every() will not return any information about
 * the element that triggered its condition.
 */

const areTheyAllGuitarists = bandMembers.every(
  (member) => member.instrument === "Guitar"
);

console.log(areTheyAllGuitarists);

/**
 * Array.find()
 *
 * The .find() array method functions somewhat similarly to .some().
 * However, rather than returning true or false based on if something
 * matching the condition exists in the array, it returns the actual
 * element that satisfies the condition. However, if no element satisfies
 * the condition of the callback function, .find() will return undefined
 *
 * In the most simple of terms, .find() can be used to find a single
 * element that matches the condiiton in the callback.
 *
 * Something to note is that .find() will find and return ONLY the first
 * instance of an element that satisfies the condition.
 */

// Find the first bandmember to play guitar
const guitaristNo1 = bandMembers.find(
  (member) => member.instrument === "Guitar"
);

console.log(guitaristNo1);

/**
 * But what if there is nothing in the array that satisfies the condition?
 */
const ukelelePlayer = bandMembers.find(
  (member) => member.instrument === "Ukelele"
);

console.log("Ukelele Player: ", ukelelePlayer);

/**
 * Array.filter()
 *
 * The .filter() method is the .find(), but with multiplayer flavor.
 * That is, it will create an array and populate with EVERY element
 * that satisfies the callback condition.
 */

const allGuitarists = bandMembers.filter(
  (member) => member.instrument === "Guitar"
);

console.log("All Guitarists in Iron Maiden: ", allGuitarists);

/**
 * Array.reduce()
 *
 * The .reduce() method is by far the most unique/challenging
 * of the higher order functions we've looked at.
 *
 * The .reduce() method is used to reduce an array into (potentially)
 * a singular value.
 *
 * The callback function for .reduce() accepts slightly different
 * sets of parameters:
 *  1. accumulator* - the singular reduced value up to the point of the
 *      current iteration
 *  2. current value* - the individual element the current iteration is for
 *  3. index - the index of the current value
 *  4. array - the array itself.
 *
 * * Required parameters
 *
 * Another difference is that .reduce() can start its process differently
 * based on an optional second parameter provided to .reduce() itself.
 *
 * BY DEFAULT, .reduce() will run its first iteration with the element
 * at index 0 as its accumulator, and the element at index 1 as its current
 * value. But, if you pass a 2nd argument to .reduce() after the callback,
 * that provided argument will be the first accumulator, and the first iteration's
 * current value will be the element at index 0 instead of 1.
 */

// Calculate the average age of the bandmembers
/**
 * NO REDUCE
 */
let sum = 0;
bandMembers.map((member) => member.age).forEach((age) => (sum += age));
sum /= bandMembers.length;
console.log(sum);

/**
 * WITH REDUCE
 */
const avgAge = bandMembers.reduce((sum, member, i, arr) => {
  sum += member.age;
  if (i === arr.length - 1) {
    // if the reduce method is on the last element
    return sum / arr.length;
  } else {
    return sum;
  }
}, 0);

console.log(avgAge);
