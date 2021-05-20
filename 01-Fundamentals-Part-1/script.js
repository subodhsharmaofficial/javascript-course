// let country = "India";
// let continent = "Asia";
// let population = 133;

// console.log(country, continent, population);
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2);

// const firstName = "Subodh";
// const lastName = "Sharma";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// console.log(x);

// let y = 5;
// y++;
// console.log(y);

// let z = 1;
// z--;
// console.log(z);

////////////////Template Literals
// const firstName = "Jonas";
// const birthYear = 1990;
// const job = "teacher";
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String with
// multiple
// lines`);

//////////////////////////////
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;

// const BMIJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////////////////////

// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving 🚗");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young. Wait for another ${yearLeft} years:)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//-------------//

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI ({${BMIJohn}}) is higher than Mark(${BMIMark})!`);
// }

// Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));

// console.log(typeof NaN);

// console.log(String(23), 23);

// Type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");
// console.log("23" > "18");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

////////////////
// 5 falsy values in JavaScript
// 0, '', null, NaN, undefined

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all :)");
// } else {
//   console.log('You should get a Job!');
// }

// let height;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';

// if (age === 18) console.log('You just become an Adult :) - (Strict)');

// if (age == 18) console.log('You just become an Adult :) - (loose)');

// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!HashChangeEvent);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const scoreDolphine = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// console.log(scoreDolphine, scoreKoalas);

// // if (scoreDolphine > scoreKoalas) {
// //   console.log('Dolphine wins the trophy 🏆');
// // } else if (scoreDolphine === scoreKoalas) {
// //   console.log('Both win the trophy');
// // } else {
// //   console.log('Koalas wins the trophy 🏆');
// // }

// if (scoreDolphine > scoreKoalas && scoreDolphine >= 100) {
//   console.log('Dolphine wins the trophy 🏆');
// } else if (scoreKoalas > scoreDolphine && scoreKoalas >= 100) {
//   console.log('Koalas wins the trophy 🏆');
// } else {
//   console.log('Both wins the trophy 🏆');
// }

// const day = 'saturday';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

//Ternary Operator

// const age = 23;
// // age >= 18
// //   ? console.log('I like to drink wine 🍷')
// //   : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

//////////////////////////////////////////
let bill = 430;

// console.log('The bill is ${bill}');
// let tip;

// if (bill > 50 && bill < 300) {
//   tip = 0.15 * bill;
// } else {
//   tip = 0.2 * bill;
// }

// console.log(tip);

const tip = bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;
console.log(tip);

const totalBill = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`
);
