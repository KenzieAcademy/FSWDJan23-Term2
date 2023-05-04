// function doSomething() {
//   let x = 10;
//   // tons of complex logic that changes the value of x
//   x += 25;
//   x /= 5;
//   x % 17;

//   return x;
// }

let state = {
  counter: 10,
  data: [],
};

let counter = state.counter;

counter = counter + 5;
console.log(state);

console.log(counter);
