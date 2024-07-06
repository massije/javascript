console.log(
  "\n\n--------------------------------------------------------------"
);
// First Challenge
console.log("01-Challenge");
const massMark = 78;
const heightMark = 1.69;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

console.log(
  "\n\n--------------------------------------------------------------"
);
// Second Challenge
console.log("02-Challenge");
let nameWin, nameLose;
if (BMIMark > BMIJohn) {
  nameWin = "Mark";
  nameLose = "John";
} else {
  nameWin = "John";
  nameLose = "Mark";
}

const outputMessage = `${nameWin}'s BMI is higher than ${nameLose}'s!`;
console.log(outputMessage);

console.log(
  "\n\n--------------------------------------------------------------"
);
// Third Challenge
console.log("03-Challenge");
const numberOfGames = 3;

const scoreGame1Dolphins = 96;
const scoreGame2Dolphins = 108;
const scoreGame3Dolphins = 89;

const scoreGame1Koalas = 88;
const scoreGame2Koalas = 91;
const scoreGame3Koalas = 110;

const scoreDolphins =
  (scoreGame1Dolphins + scoreGame2Dolphins + scoreGame3Dolphins) /
  numberOfGames;
const scoreKoalas =
  (scoreGame1Koalas + scoreGame2Koalas + scoreGame3Koalas) / numberOfGames;

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}
