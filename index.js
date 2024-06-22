// *********************************
//Hour
//If it is between 6am and 12pm Good Morning
// If it is btween 12pm and 6pm good afternoon
//Otherwise :good evening
//if else ////////////
// if (consition) {
//   statement;
// } else if (anotherCondition) {
//   statement;
// } else if (unlimitedcondition) {
//   statement;
// } else statement;

//Solution 24 hour time format

let hour = 20;
if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good Evening");
// ************************************

// Switch and case : :
let role = "guest";

// switch (variable) {}
switch (role) {
  case "guest":
    console.log("guest user");
    break;
  case "moderator":
    console.log("moderator user");
    break;
  default:
    console.log("unknown user");
}

// Same task using if else
// if (role === "guest") console.log("guest user");
// else if (role === "moderator") console.log("moderator user");
// else console.log("Unknown user");

// For Loop
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// practical example odd numbers
for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

//same example for odd numbers using while loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

//do-while loops executes once atleast even if the condition is false
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

//infinite loop

// while (i > 5) {
//   console.log(i);
//   i++;
// }
