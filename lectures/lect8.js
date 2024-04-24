/*                   Numbers And Maths                          */

// const score = 400.869
// console.log(score.toFixed(2)); // add two place of decimal
// console.log(score.toString().length);  //tells length
// console.log(score.toPrecision(4));    // roundoff 


/* --------------------- X -------------- 2ND PART------------- X -----------------------X */

// const Amt = 100000000
// console.log(Amt.toLocaleString('en-IN'));  // shows ' , ' (comma) in the given number with INDIAN standards 


/* --------------------- X -------------- 3RD PART------------- X -----------------------X */

console.log(Math.random());   // Gives any random number between 0-1
console.log((Math.random() * 10 ) + 1); // Now random will be mult w/ 10 and will some w/ 1 so the new random num will be greater than 1
console.log(Math.floor(Math.random()*10) + 1)  //Roundoff for minimum value ex- 7.8= 7

const max = 10
const min = 20
console.log(Math.floor(Math.random() * (max - min +1) + min)) // 
