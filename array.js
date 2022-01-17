let array = [15, 24, 15, 26, 1, 8, 45];

// let array5 = array.findIndex(el=> el>25)

/* Expanding the ES6 map method */
function map(arr, cb) {
  const newArr = [...arr];
  
  for (let i = 0; i < newArr.length; i++) {
    const value = newArr[i];
    const index = i;

    newArr[i] = cb(value, index, newArr);
  }

  return newArr;
}

// const array2 = array.map((el) => el * 2);
// const array3 = map(array, (el) => el * 2);

/* Expanding the ES6 filter method  */
function filter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const index = i;

    if (cb(value, index, arr)) {
      newArr.push(value);
    }
  }
  return newArr;
}

// const array4 = array.filter((el) => el > 20);
// const array5 = filter(array, (el) => el > 20);

/* Expanding the spread operator for concatenation in ES6 */
// function combine(arr1, arr2) {
//     const newArr = Array.from(arr1);
//     for(let i = 0; i < arr2.length; i++) {
//         newArr.push(arr2[i]);
//     }

//     return newArr;
// }


// let combine1 = [...array, 100, 12]
// let combine2 = combine(array, [100, 12])

/* Expanding the reduce method in ES6 */
// function reduce(arr, cb, start) {
//     let acc = start;
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         const index = i;
    
//         acc = cb(acc, value, index, arr);
//     }
//     return acc;
// }

// const array6 = array.reduce((acc, cur) => acc * cur, 5);
// const array7 = reduce(array, (acc, cur) => acc * cur, 5);

/* Expanding the ES6 find method */
// function find(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         const index = i;

//         if (cb(value, index, arr)) {
//             return value;
//         }
//     }
// }

// const array8 = array.find((el) => el > 20);
// const array9 = find(array, (el) => el > 20);

/* Expanding the ES6 findIndex method */
// function findIndex(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         const value = arr[i];
//         const index = i;

//         if (cb(value, index, arr)) {
//             return index;
//         }
//     }
// }

// // Find index of reoccurring element, 15 in the array
// const array10 = array.map((el, i) => {
//     if(el === 15) return i;
//     return;
// }).filter(it => it !== undefined)
// const array11 = map(array, (el, i) => {
//     if(el === 15) return i;
//     return;
// }).filter(it => it !== undefined)

// // Find index of element in array
// const array12 = array.findIndex((el) => el === 15);
// const array13 = findIndex(array, (el) => el === 15);
