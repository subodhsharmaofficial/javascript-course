"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";

// const private = 534;

/////----------FUNCTIONS-------------//////////

// function logger() {
//   console.log("My name is Jonas");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function foodProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// // console.log(foodProcessor(5, 0));

// const appleorangeJuice = foodProcessor(2, 4);
// console.log(appleorangeJuice);

//Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //Function Expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntillRetirement(1991, "Jonas"));
// console.log(yearUntillRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function foodProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//   return juice;
// }

// console.log(foodProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement >= 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearUntillRetirement(1991, "Jonas"));
// console.log(yearUntillRetirement(1950, "Mike"));

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphin, scoreKoalas);

// const checkWinner = function (avgDolphin, avgKoalas) {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`Dolphine win (${avgDolphin} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
//   } else {
//     console.log(`No team wins the game`);
//   }
// };

// checkWinner(scoreDolphin, scoreKoalas);

// checkWinner(576, 111);

// ARRAY
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Joy";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Sharma", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const age = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(age);

/*

const friends = ["Michael", "Steven", "Peter"];
//Add Elements
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove ELements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//Find index of given element

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

// CODING CHALLENGE #2 - ARRAYS
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

//INTRODUCTION TO OBJECTS
/*
const subodh = {
  firstName: "Subodh",
  lastName: "Sharma",
  age: 2021 - 1994,
  job: "Developer",
  friends: ["Mohan", "Rohan", "Sudhir"],
};

console.log(subodh);

//DOT VS BRACKET NOTATION

console.log(subodh.lastName);
console.log(subodh["lastName"]); //accept any expression

const nameKey = "Name";
console.log(subodh["first" + nameKey]);
console.log(subodh["last" + nameKey]);

// console.log(subodh."first" + nameKey); // will not work

const interestedIn = prompt(
  "What do you want to know about Subodh? Choose between firstName, lastName, age, job, and friends"
);

console.log(subodh.interestedIn); /// will not work

console.log(subodh[interestedIn]);

if (subodh[interestedIn]) {
  console.log(subodh[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Add new properties to Objects

subodh.location = "Bengaluru";
subodh["twitter"] = "@iSubodhSharma";
console.log(subodh);

//Challenge
//"Subodh has 3 friends, and his best friend is called Mohan"

console.log(
  `${subodh.firstName} has ${subodh.friends.length} friends, and his best friend is called ${subodh.friends[0]}`
);
*/

/*

const subodh = {
  firstName: "Subodh",
  lastName: "Sharma",
  birthYear: 1994,
  job: "Developer",
  friends: ["Mohan", "Rohan", "Sudhir"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};
// console.log(subodh.calcAge(1991));

// console.log(subodh.calcAge());
// console.log(subodh["calcAge"](1991));

console.log(subodh.calcAge());
console.log(subodh.age);
console.log(subodh.age);
console.log(subodh.age);

console.log(subodh.summary());

//Challenge
//"Subodh is a 46-year old developer, and he has a/no driver's license"
*/

//Coding Challenge # 3
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
}
*/
//Iteration: The for Loop

// console.log("Lifting weights repitition 1 🏋️‍♀️");
// console.log("Lifting weights repitition 2 🏋️‍♀️");
// console.log("Lifting weights repitition 3 🏋️‍♀️");
// console.log("Lifting weights repitition 4 🏋️‍♀️");
// console.log("Lifting weights repitition 5 🏋️‍♀️");
// console.log("Lifting weights repitition 6 🏋️‍♀️");
// console.log("Lifting weights repitition 7 🏋️‍♀️");
// console.log("Lifting weights repitition 8 🏋️‍♀️");
// console.log("Lifting weights repitition 9 🏋️‍♀️");
// console.log("Lifting weights repitition 10 🏋️‍♀️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
// }

/*

const subodhArray = [
  "Subodh",
  "Sharma",
  2037 - 1991,
  "developer",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < subodhArray.length; i++) {
  console.log(subodhArray[i], typeof subodhArray[i]);
  //Filling types array
  // types[i] = typeof subodhArray[i];
  types.push(typeof subodhArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const age = 2037 - years[i];
  ages.push(age);
}

console.log(ages);

//continue and break;

console.log("-------ONLY STRING--------");
for (let i = 0; i < subodhArray.length; i++) {
  if (typeof subodhArray[i] !== "string") continue;
  console.log(subodhArray[i], typeof subodhArray[i]);
}

console.log("-------BREAK WITH NUMBER--------");
for (let i = 0; i < subodhArray.length; i++) {
  if (typeof subodhArray[i] === "number") break;
  console.log(subodhArray[i], typeof subodhArray[i]);
}
*/

/*

const subodh = [
  "Subodh",
  "Sharma",
  2037 - 1991,
  "developer",
  ["Michael", "Peter", "Steven"],
];

for (let i = subodh.length - 1; i >= 0; i--) {
  console.log(i, subodh[i]);
}

for (let exercise = 1; exercise < 5; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️ `);
  }
}

*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
// // }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
