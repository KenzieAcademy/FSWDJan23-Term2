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

// Kata 1
const activeUsers = users.filter((user) => user.isActive);
printKata(1, activeUsers);
// Kata 2
function formatEmail(user) {
  const uname = user.name.toLowerCase().replace(" ", ".");
  const email = user.email.replace("undefined.undefined", uname);
  return email;
}

const emailAddresses = users.map((user) => formatEmail(user));
printKata(2, emailAddresses);
// Kata 3
const areAnyOvationEmployees = users.some(
  (user) => user.company.toUpperCase() === "OVATION"
);
printKata(3, areAnyOvationEmployees);
// Kata 4
const firstUserOver28 = users.find((user) => user.age > 28);
printKata(4, firstUserOver28);
// Kata 5
const firstActiveUserOver28 = users
  .filter((user) => user.age > 28)
  .find((user) => user.isActive);

// optimized
// const opt = users.find((user) => user.age > 28 && user.isActive);
printKata(5, firstActiveUserOver28);
// Kata 6
const zencoBalances = users
  .filter((user) => user.company.toUpperCase() === "ZENCO")
  .map((user) => user.balance);
printKata(6, zencoBalances);
// Kata 7
const fugiatAges = users
  .filter((user) => user.tags.includes("fugiat"))
  .map((users) => users.age);
printKata(7, fugiatAges);
// Kata 8
function sanitizeDollarAmount(amountString) {
  return amountString.split("$").join("").split(",").join("");
}
function formatPrice(price) {
  return "$" + price.toLocaleString("en-us");
}

const totalBalance = users.reduce(
  (sum, user) => Number(sum) + Number(sanitizeDollarAmount(user.balance)),
  sanitizeDollarAmount(users[0].balance)
);
printKata(8, formatPrice(totalBalance));
// Kata 9

const k9H2 = document.createElement("h2");
k9H2.innerText = "Users with Brown Eyes";
main.append(k9H2);
const k9Ul = document.createElement("ul");
main.append(k9Ul);

const userListItems = users.map((user) => {
  const li = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.innerText = user.name;
  li.classList.add("flex-col");
  li.classList.add("gap-5");
  const img = document.createElement("img");
  img.src = user.picture;
  img.alt = `Picture of ${user.name}`;
  img.classList.add("user-pic");

  li.append(nameSpan, img);
  return li;
});

userListItems.forEach((li) => k9Ul.append(li));
