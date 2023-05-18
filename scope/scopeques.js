function checkAccess() {
  let x = 10;
  var y = 20;
  const z = 40;

  for (let i = 0; i < 5; i++) {
    var loopVar = 1;
  }
  console.log(x, y, z, loopVar);
}
checkAccess();
console.log(loopVar, window.y, window.x);
function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}
foo();
typeof a;
typeof window.b;

function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}
foo();
typeof a;
typeof window.b;

function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}
foo();
console.log("typeof a", typeof a);
console.log(a);

function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}
foo();
console.log("typeof a", typeof a);
console.log(a);

console.log(a);
var a = 10;

console.log(a);
let a = 10;

console.log(a);
const a = 10;

let a = 10;
console.log(a);
const a = 10;

function tryMe() {
  let test = 10;
  b = 30;
}

console.log(test, b);

function tryMe() {
  let test = 10;
  b = 30;
  return test;
}

console.log(b, this.b, window.b);

function tryMe() {
  let test = 10;
  b = 30;
  return test;
}
tryMe();
console.log(b, this.b, window.b);

function tryMe() {
  let test = 10;
  b = 30;
  return test;
}

console.log(typeof typeof b);

typeof b; // "undefined"

function tryMe() {
  let test = 10;
  b = 30;
  console.log(this.text);
}
tryMe();
console.log(b, this.b, window.b);

function checkAccess() {
  let x = 10;
  var y = 20;
  const z = 40;

  for (let i = 0; i < 5; i++) {
    var loopVar = 1;
  }
  console.log(x, y, z, loopVar);
}
checkAccess();
console.log(loopVar, window.y, window.x);
