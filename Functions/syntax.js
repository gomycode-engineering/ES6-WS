/**
 * Convert this code into Arrow functions
 */

// Example 1
// ---------
// function expression version
const add = function (x, y) {
  return x + y;
};
const getName = function (name) {
  return `hello ${name}`;
};
// arrow function version
const add1 = (x, y) => x + y;
const getName1 = (name) => `hello ${name}`;

// Example 2
// ---------
let people = [
  { name: "Ahmed", age: 27 },
  { name: "Abbas", age: 22 },
  { name: "Aly", age: 29 },
  { name: "Ahmed", age: 28 },
  { name: "Kareem", age: 35 },
];

/* Task:
* Find the sum of the ages of the people
* between 25 and 30 whose names are Ahmed
* 
* Step 1: Filter the array to return people
          that their ages are between 25 and 30
* Step 2: Filter the array to return people that
          their names are Ahmed  
* Step 3: Sum the ages of the people using reduce
          method
*/

function filterFunc(el) {
  return el.name === "Ahmed" && el.age >= 25 && el.age <= 30;
}

let filtered = people.filter(filterFunc);
let sum = filtered.reduce((acc, cur) => acc + cur.age, 0);

// // function expression version
// let ageSum = people
//   .filter(function (person) {
//     return person.age > 25 && person.age < 30;
//   })
//   .filter(function (person) {
//     return person.name === 'Ahmed';
//   })
//   .map(function (person) {
//     return person.age;
//   })
//   .reduce(function (prev, curr) {
//     return (prev || 0) + curr;
//   });

// // arrow function version
let ageSum = people
  .filter((person) => person.age > 25 && person.age < 30)
  .filter((person) => person.name === "Ahmed")
  .map((person) => person.age)
  .reduce((prev, curr) => (prev || 0) + curr);

console.log(ageSum);
