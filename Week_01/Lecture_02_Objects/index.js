const root = document.getElementById("root");
// let alexFavoriteMovieAlex = "The Godfather";
// let alexFavoriteMovieMax = alexFavoriteMovieAlex;

// // weeks go by
// alexFavoriteMovieAlex = "The Shawshank Redemption";

// console.log(alexFavoriteMovieMax);

// // Alex informs Max of her new favorite movie
// alexFavoriteMovieMax = alexFavoriteMovieAlex;

// console.log(alexFavoriteMovieMax);

// const alexCar = {
//   year: 2023,
//   make: "Honda",
//   color: "Silver",
//   model: "Civic",
//   doors: 4,
//   drive: "FWD",
// };
// console.log(JSON.stringify(alexCar));

// const maxCar = alexCar;

// maxCar.decals = "Flames";
// maxCar.color = "Red";
// console.log(JSON.stringify(maxCar));

// console.log(JSON.stringify(alexCar));

// // The delete keyword can be used to delete a property and its value
// delete alexCar.decals;

// console.log(JSON.stringify(maxCar));
// console.log("Max: :(");

// const alexAndMaxCar = {
//   year: 2023,
//   make: "Honda",
//   color: "Silver",
//   model: "Civic",
//   doors: 4,
//   drive: "FWD",
// };

// Copying an object method 1: Copy + Paste (not really doable while an app runs)
// const strangerCar = {
//   year: 2023,
//   make: "Honda",
//   color: "Silver",
//   model: "Civic",
//   doors: 4,
//   drive: "FWD",
// };

// Copying an object method 2: Create a new object and manually assign every property to the original property values
// const strangerCar = {};
// strangerCar.year = alexAndMaxCar.year;
// strangerCar.make = alexAndMaxCar.make;

// Copying an object method 3: Object.keys()
// const strangerCar = {};
// for (let key of Object.keys(alexAndMaxCar)) {
//   strangerCar[key] = alexAndMaxCar[key];
// }

// The good way! Spread operator *FOR SHALLOW COPIES
// const strangerCar = { ...alexAndMaxCar };

// console.log(
//   "Assigning the original to the new: Are they the same?",
//   strangerCar === alexAndMaxCar
// );

// strangerCar.color = "Blue";
// console.log(alexAndMaxCar);

// const favoriteBands = ["Iron Maiden", "Van Halen", "ZZ Top", "Led Zeppelin"];
// const annoyingFriend = [...favoriteBands];
// console.log(favoriteBands === annoyingFriend);
// favoriteBands.push("Smash Into Pieces");
// console.log(annoyingFriend);

// SHALLOW COPIES???
// const alexAndMaxCar = {
//   year: 2023,
//   make: "Honda",
//   color: "Silver",
//   model: "Civic",
//   doors: 4,
//   drive: "FWD",
//   safetyFeatures: [
//     "Seatbelts",
//     "Curtain airbags",
//     "Backup camera",
//     "Side collision warning",
//   ],
// };
// //                        0xAA92749
// const strangerCar = { ...alexAndMaxCar };

// // 0xEF729
// strangerCar.color = "Blue";

// strangerCar.safetyFeatures = [
//   ...strangerCar.safetyFeatures,
//   "Sentinel mode cameras",
// ];

// console.log(alexAndMaxCar.safetyFeatures);

// Comparing structures
/**
 * You can compare the structure of two objects (i.e. do they have the same properties)
 * by combining the Object.keys() method and checking for equivalence using the .hasOwnProperty() method
 */
const objA = {
  make: "Honda",
  model: "Civic",
  year: 2023,
  steeringWheel: "Wheel-o-matic Industries",
};
const objB = {
  make: "Yamaha",
  model: "Bike-y-thing",
  year: 2019,
  handleBars: "Bar-o-matic Industries",
};

function isSameStructure(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  // Fast fail: If they have a different number of properties, they obviously don't share a structure
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  // Create for loop to iterate through one object's keys
  for (let prop of aKeys) {
    // For each of those properties, check if obj2 has the same property
    if (!b.hasOwnProperty(prop)) {
      return false;
    }
  }

  return true;
}

const alexAndMaxCar = {
  year: 2023,
  make: "Honda",
  color: "Silver",
  model: "Civic",
  doors: 4,
  drive: "FWD",
  safetyFeatures: [
    "Seatbelts",
    "Curtain airbags",
    "Backup camera",
    "Side collision warning",
  ],
};
// Cheating: Creating a deep copy with JSON black magic
// const strangerCar = JSON.parse(JSON.stringify(alexAndMaxCar));

// console.log(alexAndMaxCar === strangerCar);

// class Test {
//   constructor(a, b) {
//     this.propA = a;
//     this.propB = b;
//   }
// }
// const testObj = new Test("hello", "world");
// const testCopy = JSON.parse(JSON.stringify(testObj));

// console.log(testCopy.constructor.name);

const rawObjString = `{ "property": "value", "property2": 25 }`;
const rawObj = JSON.parse(rawObjString);

console.log(rawObj);
