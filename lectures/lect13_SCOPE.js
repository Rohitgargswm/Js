/*------------------ SCOPE  ------------------*/

/*
  SCOPE are of two types:
  1.Global Scope:->parameters / arguments / values outside the function or object.

  2.Blocked Scope:  parameters / arguments / values inside the function or object.
  .                -> parameters/arguments/values inside the function or object can't be used outside
*/

// let a= 100       // this a will be considered as its in global scope.

// if(true){                     // values or argument or parameters made in function/object are
//    let a=1                    //    in blocked scope. Which means can't be used outside.
//    const b=2 
//    var c=3
//    console.log(a);
// }

// console.log(a);
// console.log(b); 
// console.log(c);

/* --------------------- X ---------------------- X -----------------------X */


// function one(){                       // We made a function named one()
//     let username = "Rohit garg"       // declared a variable 
    
//     function two(){                   // We nested another function into a function
//         console.log(username)         // we asked parent function for thier variable. Like we ask for money from our parents 
//         let icecream = "Frostic"      // declared a variable
//     }
//     // console.log(icecream);         // we can't ask our child funtion for his assets. just like our parents dont ask for money from us.
//     two()                             // We call function two() for the execution
// }
// one()                                 // we called funtion one() for the execution


/* --------------------- X ---------------------- X -----------------------X */


// console.log( one(5) );    // before declaration we can call a function made directly.
// function one(num){        // we have made a function named one().
//     return num+1          // operation
// }



// // console.log(fun2(5))                // we cannot access 'fun2' before initialization when we have made a function in a variable.  
// const fun2 = function two(num){     // we have declared a function in a variable. this type of declartion is called EXPRESSION
//     return num + 2
// }
// console.log(fun2(5))        // after the declaration we can call any EXPRESSION.


/* --------------------- X ---------------------- X -----------------------X */


// 'this' keyword is used to get the context of the whole argument/object/function in which its 
//   had been used. 'this' keyword also helps to get new updated parameters/argument/values also.

// const user = {
//     username: "Rohit",
//     LPA : 15,
//     welComeMessage: function callME() {
//         console.log(`hello ${this.username} we know your LPA is ${this.LPA}`);   
//     }
// }
// user.welComeMessage()            // passes the function with old parameters  
// user.username = "Utsav"          // here we update new values
// user.welComeMessage()            // passes the function with new parameters


/* --------------------- X ---------------------- X -----------------------X */
// Context : context means whole argument where we passes the parameters and place thw whole syntax

const user = {
    username: "Rohit",
    LPA : 15,
    welComeMessage: function callME() {
        console.log(`hello ${this.username} we know your LPA is ${this.LPA}`);   
        console.log(this);       // 'this' will help to showcase complete context
    }
}
user.welComeMessage()            // passes the function with old parameters  
user.username = "Utsav"          // here we update new values
user.LPA = 51
user.welComeMessage() 
/* output:
hello Rohit we know your LPA is 15
{ username: 'Rohit', LPA: 15, welComeMessage: [Function: callME] }
hello Utsav we know your LPA is 15
{ username: 'Utsav', LPA: 15, welComeMessage: [Function: callME] }
*/



