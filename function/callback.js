const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulas = (num1, num2) => num1 % num2;
const addAndMinusTwo = (num1, num2) => num1 + num2 - 2;

const calculator = (a, b, callbackFn) => {
  return callbackFn(a, b);
};

console.log("Add: ", calculator(10, 70, add)); // Add
console.log("Subtract: ", calculator(10, 70, subtract)); // Subtract
console.log("Multiply: ", calculator(10, 70, multiply)); // Multiply
console.log("Divide: ", calculator(10, 70, divide)); // Divide
console.log("Divide: ", calculator(10, 70, modulas)); // Mode
console.log("Divide: ", calculator(10, 70, addAndMinusTwo)); // AddAndMinusTwo
