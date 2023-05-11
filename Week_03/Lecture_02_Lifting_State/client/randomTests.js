const arr = [1, 2, 3, 4, 5];

const add5ToArrNum = (num, i, arr) => (arr[i] = num + 5);

// arr.forEach(add5ToArrNum);

add5ToArrNum(3, 2, arr);

console.log(arr);
