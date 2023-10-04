const numbers = [1, 2, 3, 4, 5];

// Using forEach
numbers.forEach((number) => {
  console.log(number * 2);
});
// Output: 2 4 6 8 10

// Using map
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]
