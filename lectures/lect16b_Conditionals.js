/*------------------ FALSE/FALSY CONDITIONS  -----------------

Some defualt false/falsy assumed conditions are:
FALSE , 0 , -0 , NULL , NaN , undefined , BigInt 0n , "" .


---------------------  TRUE CONDITIONS  --------------------
Some defualt TRUE assumed conditions are:
TRUE , 1 , BigInt 1n , {} , [] 
*/


// const arr = " Rohit "

// if (arr) {
//     console.log("constant have some stored value");
// }
// else{
//     console.log("constant is empty");
// }
// //output: constant have some stored value


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr = ""

// if (arr) {
//     console.log("constant have some stored value");
// }
// else{
//     console.log("constant is empty");
// }
//output : constant is empty

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr = {}

// if (arr) {
//     console.log("constant have some stored value");
// }
// else{
//     console.log("constant is empty");
// }
// //output: constant have some stored value


/* ------------------------- X --------------------------- X ---------------------------X */

// const user = ""

// if (user.length === 0) {
//     console.log("empty");
// }
// else{
//     console.log("have some stored value")
// }
// // output: empty

//+++++++++++++++++++++++++++++++++++++++++++++++++

// function user(){}

// if ( user === 0) {
//     console.log("empty");
// }
// else{
//     console.log("have some stored value")
// }
//output : have some stored value


/* ------------------------- X ----TERRNIORY OPERATOR ---- X ---------------------------X */

const iceCream = 100;
iceCream <= 80 ? console.log("More than 80") : console.log("Less than 80");
// condition ? (if true what to print) : (if not true what to print)


