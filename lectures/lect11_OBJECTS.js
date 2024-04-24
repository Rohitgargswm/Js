/*------------------ OBJECTS  ------------------*/

// const mySymbol = Symbol("info_hai")

// const info = {
//     name : "Rohit",
//     [mySymbol] : "hello i am bhagwan ka bhagat",
//     age : 20,
//     email:"gargrohit@gmail.com"
// }
// console.log(info.email);        // output:  gargrohit@gmail.com  
// console.log(info["email"]);     // output:  gargrohit@gmail.com  
// console.log(info[mySymbol]);    // output:  hello i am bhagwan ka bhagat 


/* --------------------- X -------------- Updation  ------------- X -----------------------X */


const info = {
    name : "Rohit",
    domain : "WEBD / UiUx",
    age : 20,
    email:"gargrohit@gmail.com"
}
console.log(info)   // output is whole detail

info.email = "rohitgarg@gamil.com"
console.log( info);  // in output email is modified to  rohitgarg@gamil.com

Object.freeze( info)   // freeze is used to lock the updation capability of any segment. 
info.email = "rohitswm@gamil.com"
console.log(info);

