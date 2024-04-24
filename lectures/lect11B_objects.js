/* --------------------- X --------- how to make an object a SINGLETON ------------- X -----------------------X */

// const info = {}              // By {} we made info as an object
// info.name = "Rohit Garg"     // we can directly feed the input as shown 
// info.age = 20
// info.email = "Gargrohit@gmail.com"

// console.log(info)          // { name: 'Rohit Garg', age: 20, email: 'Gargrohit@gmail.com' }


// const college = {
//     name : "skit",
//     address : {
//         city : "jaipur",
//         fullAddress : {
//             area : "Jagatpura"
//         }
//     }
// } 

// console.log(college);  // output: name: 'skit',address: { city: 'jaipur', fullAddress: { area: 'Jagatpura' } } }
// console.log(college.address);   // output: { city: 'jaipur', fullAddress: { area: 'Jagatpura' } }
// console.log(college.address.city);   // output: jaipur
// console.log(college.address.fullAddress);   //output: { area: 'Jagatpura' }


/* --------------------- X --------- object in obeject just like an array ------------- X -----------------------X */


// const obj1 = {
//     1: "Rohit",
//     2: "Utsav"
// }
// const obj2 = {
//     3: "Anand",
//     4: "Balu"
// }

// const obj4 = Object.assign({},obj1,obj2)  // object.assign({},obj1)  is used to insert source objects into targeted empty object.  syntax:  object.assign(target , source).
// console.log(obj4);  // output: { '1': 'Rohit', '2': 'Utsav', '3': 'Anand', '4': 'Balu' }

// const obj3 = { ...obj1 ,...obj2 }   //here ... (dots) are used to seprate objects into a new object in which we have assigned like obj3
// console.log(obj3);   // output: { '1': 'Rohit', '2': 'Utsav', '3': 'Anand', '4': 'Balu' }




/* --------------------- X -- to get info of an object -- X -----------------------X */


// const obj1 = {
//     name: "Rohit",
//     email: "gargrohit@gmail.com",
//     mob: 9057279883
// }
// console.log(Object.keys(obj1));   // Output: [ 'name', 'email', 'mob' ]  . here 'keys' keyword is used to get the parameters.
// console.log(Object.values(obj1));  // Output: [ 'Rohit', 'gargrohit@gmail.com', 9057279883 ] . Here 'values' keyoword is used to get the value of the asked parameters.
// console.log(Object.entries(obj1));  // output: [ [ 'name', 'Rohit' ],[ 'email', 'gargrohit@gmail.com' ],[ 'mob', 9057279883 ] ] . Here 'entries' keyword is used to get all information of object/array in an array form for every individual parameters.
// console.log(obj1.hasOwnProperty('email')); // Output: true . here 'hasOwnProperty' is  used to find the parameter we entered in the object/array we made. 


/* --------------------- X -- to get info of an object -- X -----------------------X */

const course = {
    courseName : "JS course" ,
    price: 9 ,
    available : true ,
    instructor: "Utsav"
}
const {instructor} = course      // We have made a direct relation of instructor parameter with cousre so we can call instructor directly. 
console.log(instructor);          //Output : Utsav

const {instructor : admin} = course  // we have named instructor as admin to call in console
console.log(admin);                     //Output : Utsav










