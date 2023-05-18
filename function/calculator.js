const calculator = (a, b, op) => {
    // Guard Block Approach
    if (op === "+") {
      return a + b;
    }
  
    if (op === "-") {
      return a - b;
    }
  
    if (op === "*") {
      return a * b;
    }
  
    if (op === "/") {
      return a / b;
    }
  
    if (op === "%") {
      return a % b;
    }
  
    return "Not a valid mathematical operation";
  };
  
  const calculatorV2 = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      default:
        return "Not a valid mathematical operation";
    }
  };
  
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;
  const modulas = (num1, num2) => num1 % num2;
  
  const calculatorV3 = (a, b, op) => {
    switch (op) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      case "%":
        return modulas(a, b);
      default:
        return "Not a valid mathematical operation";
    }
  };
  
  console.log("Add: ", calculator(10, 70, "+")); // Add
  console.log("Subtract: ", calculator(10, 70, "-")); // Subtract
  console.log("Multiply: ", calculator(10, 70, "*")); // Multiply
  console.log("Divide: ", calculator(10, 70, "/")); // Divide
  console.log("Divide: ", calculator(10, 70, "%")); // Divide