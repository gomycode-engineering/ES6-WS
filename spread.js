// Example 1
// ---------
// function sum(x, y, z) {
//   return x + y + z;
// }

// let inputs = [1, 2, 3];
// sum(...inputs);

// Example 2
// ---------
// console.log(Math.max(...[-1, 100, 9001, -32])); // 9001
// console.log(Math.max([-1, 100, 9001, -32])); // NaN
// console.log(Math.max(-1, 100, 9001, -32)); // 9001

// Example 3
// ---------
// let arr = [1, 2, 3];
// // let copiedArr = arr
// let copiedArr = [...arr];
// copiedArr.push(4);
// console.log(arr, copiedArr);

// Example 4
// ---------
// let cities = ['San Francisco', 'Los Angeles', 'Paris'];
// let places = ['Miami', 'Chicago', ...cities];
// let [a, ...rest] = cities

// console.log(places, rest, cities, a);


// Example 5
// ---------
// function summation(...args) {
//   return args.reduce((acc, cur) => acc + cur, 0);
// };

// summation(1, 2, 3, 4, 5, 6, 7, 8, 10);