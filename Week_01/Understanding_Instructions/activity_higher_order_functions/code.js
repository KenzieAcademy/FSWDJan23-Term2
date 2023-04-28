// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

const printKata = function (kataNumber, object) {
  // For the usage of the DETAILS and SUMMARY tags
  // in HTML, see: http://mdn.io/details-element
  const detailsElement = document.createElement("details");
  main.append(detailsElement);
  //
  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);
  //
  // http://mdn.io/json.stringify
  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
};

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

// Kata 0: Users with green eyes
const greenEyeUsers = users.filter((user) => user.eyeColor === "green");

printKata(0, greenEyeUsers);

// Kata 1: Active users
const activeUsers = users.filter((user) => user.isActive);
printKata(1, activeUsers);

// Kata 2: Just user emails
const emails = users.map((user) => user.email);
printKata(2, emails);
