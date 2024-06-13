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
