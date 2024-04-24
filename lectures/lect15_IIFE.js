/*------------------- IIFE (Immediately Invoked Function Expression)  ------------------*/

/*    IIFE is same as code done below. 
It is used to execute the program asap after the declaration
In IIFE we only have to make funtion in () and after the end again give (). 

*/

// function chai() {
//     console.log("Rohit garg")
// }
// chai()       // here we have to call for output

//++++++++++++++++++++++++++++++++++

// (function chai() {
//     console.log("Rohit garg")
// }) ()         // Rohit Garg      . here we have directly gave command to execute asap after declaration

// () ()   . here we have given 1st () to identify which prgm we have to execute. And 
//           2nd ()  for the execution.

//++++++++++++++++++++++++++++++++++++
let val1 = 54;
let val2 = 46;
(function addNum(num1 , num2){
    let total = num1 + num2
    console.log(total)
}) (val1 , val2)

/* --------------------- X ---------------------- X -----------------------X */

//Arrow function
// ( () => {
//     console.log("hello");
// })()
//output: hello

//++++++++++++++++++++++++++++++++++
// we have passed a variable in funtion and gave to input in the execution area.
( (userName) =>{
    console.log(`${userName}`);
} )('Rohit don')     //output: Rohit don







