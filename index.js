// For Loop
// for (let i = 0; i < 5; i++) {
//   console.log("Hello World", i);
// }

// // practical example odd numbers
// for (let i = 0; i < 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// //same example for odd numbers using while loop
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// //do-while loops executes once atleast even if the condition is false
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

//infinite loop

// while (i > 5) {
//   console.log(i);
//   i++;
// }

// for in loop
const person = {
  name: "Mosh",
  age: 30,
};
for (let key in person) {
  console.log(key, person[key]);
}
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

//for of loop
for (let color of colors) console.log(color);

//break and continue
let i = 0;
while (i <= 10) {
  if (i === 5) break;
  // if (i % 2 === 0) {
  //   i++;
  //   continue; /////usage minimum
  // }
  console.log(i);
  i++;
}
