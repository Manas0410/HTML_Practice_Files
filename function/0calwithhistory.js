const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulas = (num1, num2) => num1 % num2;
const addAndMinusTwo = (num1, num2) => num1 + num2 - 2;

const saveToLocalStorage = (data) => {
  const saved = JSON.parse(localStorage.getItem("history")) || [];
  saved.push(data);
  localStorage.setItem("history", JSON.stringify(saved));
};

const calculator = (a, b, callbackFn) => {
  a = Number(a);
  b = Number(b);

  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof callbackFn !== "function"
  ) {
    throw new Error("Please enter a valid number");
  }

  const result = callbackFn(a, b);

  // Creating the history object
  const operation = {
    a: a,
    b: b,
    result: result,
  };

  // Saving to history
  saveToLocalStorage(operation);

  return result;
};

console.log("Add: ", calculator(100, 70, add)); // Add
console.log("Subtract: ", calculator(110, 70, subtract)); // Subtract
console.log("Multiply: ", calculator(10, 740, multiply)); // Multiply
console.log("Divide: ", calculator(1220, 7330, divide)); // Divide
console.log("Divide: ", calculator(1340, 7240, modulas)); // Mode
console.log("Divide: ", calculator(210, 470, addAndMinusTwo)); // AddAndMinusTwo