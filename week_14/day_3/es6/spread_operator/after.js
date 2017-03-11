const numbers = [1, 2, 3, 4];
const moreNumbers = [5, 6, 7, 8];

const allNumbers = [...numbers, ...moreNumbers];

console.log(...numbers);
console.log(numbers[0], numbers[1]);

const myFunction = function () {
  [...arguments].map();
}

// console.log(numbers);
// console.log(moreNumbers);
// console.log(allNumbers);