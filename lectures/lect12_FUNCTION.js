/*------------------ FUNCTIONS  ------------------*/


// function myName(){
//     console.log("R");
//     console.log("o");
//     console.log("h");
//     console.log("i");
//     console.log("t");
// }

// myName()  // first we'll give function name and then we will execute/call the function by ()
/*output:
R
o
h
i
t
*/


/* --------------------- X ---------------------- X -----------------------X */

// function calci(num1 , num2){
//     console.log(num1 + num2);
//     console.log(num1 * num2);
//     console.log(num1 / num2);
//     console.log(num1 - num2);
// }
// calci(80 , 40)  // between the () we have provided parameter / values 
/*output:
120
3200
2
40
*/


/* --------------------- X ---------------------- X -----------------------X */

// function calci(num1 , num2){
//     console.log(num1 + 1);
// }
// calci(null , null)  // here null will act as 0
/*output:
1
*/



/* --------------------- X ---------------------- X -----------------------X */

// function calci(num1 , num2){
//     let result = num1 + num2
//     return result;
// }
// const result = calci(5,5)
// console.log(result)     //output: 10


/* --------------------- X ---------------------- X -----------------------X */

// function userLoggedIn(userName){
//     return ` ${userName} just logged In `
// }
// userLoggedIn() //this will only return the arguments.
// console.log(userLoggedIn("Rohit"));   //OUTPUT: Rohit just logged In 


/* --------------------- X ---------------------- X -----------------------X */

// function userLoggedIn(userName){
//     if(!userName){
//         console.log("Please enter user name !");
//         return
//     }
//     return`${userName} just logged In`
// }
// console.log(userLoggedIn()) // Here we are not giving any values for the argument we made.
/*Output:
Please enter user name !
undefined
*/

// function userLoggedIn(userName){
//     if(!userName){
//         console.log("Please enter user name !");
//         return
//     }
//     return`${userName} just logged In`
// }
// console.log(userLoggedIn("Rohit"));  //here we are passing the values for the argument we made.
// Output: Rohit just logged In


/* --------------------- X ---------------------- X -----------------------X */

// const cart = {
//     username : "rohit",
//     product : "Car",
//     price : 10000000 
// }

// function handleObject(anyobject){
//     console.log(`hello ${anyobject.username}, your ${anyobject.product} worth ruppes ${anyobject.price}`);
// }
// handleObject(cart) //here we have executed handleObject(function) with the data of cart (object) 
//output: hello rohit, your Car worth ruppes 10000000


/* --------------------- X ---------------------- X -----------------------X */

// handleObject({            //We have made an object name 
//     username : "rohit",
//     product : "Car",
//     price : 10000000
// })

// function handleObject(anyobject){
//     console.log(`hello ${anyobject.username}, your ${anyobject.product} worth ruppes ${anyobject.price}`);
// }
//output: hello rohit, your Car worth ruppes 10000000


/* --------------------- X ---------------------- X -----------------------X */

// const newArray = [143 , 189 , "ok"]   // we made a new array

// function callMe(getArray){       //we made a new function named callMe by passing argument getArray with its duty.
//     return getArray[1]           // here we instructed that we will be getting the 1st index value
// }
// console.log(callMe(newArray));     //here callMe function will be called with the parameters of
// newArray. And then function will give to the instructed argument named getArray.

// Output: 189










