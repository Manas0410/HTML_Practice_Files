console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
const p1 = new Promise((reply, reject) => {
  setTimeout(() => {
    reply("Done");
  }, 1000);
});
p.then((data) => {
  console.log("3", data);
});
for (let i = 0; i < 10; i++) {
  console.log("i: ", i);
}
console.log("4");




//second
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

const p = new Promise((reply, reject) => {
    reply("Done");
});

p.then((data) => {
  console.log("3", data);
});

for (let i = 0; i < 10; i++) {
  console.log("i: ", i);
}

console.log("4");