const coding = [".js" , "ruby " , "MySql" , "MongoDB "]

// coding.forEach( function ( item ) {
//     console.log(item);
// } )
/*
.js
ruby 
MySql
MongoDB 
*/



/*-------------------- CallBack arrow function ---------------------*/

// coding.forEach( ( val1 ) => {
//     console.log(val1);
// } )
/*
.js
ruby 
MySql
MongoDB 
*/

//++++++++++++++++++++++++++

// function printMe(iteam){
//     console.log(iteam);
// }
// coding.forEach(printMe)
/*
.js
ruby 
MySql
MongoDB 
*/

//++++++++++++++++++++++++++++++++++


 //we havr more parameters also like (item: for elements , index: for their position , arr: array which they can access)
// function printMe(iteam , index , arr){
//     console.log(iteam , index , arr);
// }
// coding.forEach(printMe)
/*
.js 0 [ '.js', 'ruby ', 'MySql', 'MongoDB ' ]
ruby  1 [ '.js', 'ruby ', 'MySql', 'MongoDB ' ]
MySql 2 [ '.js', 'ruby ', 'MySql', 'MongoDB ' ]
MongoDB  3 [ '.js', 'ruby ', 'MySql', 'MongoDB ' ]
*/


/*-------------------- CallBack arrow function with object nested in an array. ---------------------*/

// const arr = [
//     {
//         courseName: "JavaLearnings",
//         courseTeacher: "Hitesh"
//     },
//     {
//         courseName: "PythonLearnings",
//         courseTeacher: "Rohit"
//     },
//     {
//         courseName: "CppLearnings",
//         courseTeacher: "Ashish "
//     }
// ]

// arr.forEach( ( item ) =>{
//     console.log(item);
// })
/*
{ courseName: 'JavaLearnings', courseTeacher: 'Hitesh' }
{ courseName: 'PythonLearnings', courseTeacher: 'Rohit' }
{ courseName: 'CppLearnings', courseTeacher: 'Ashish ' }
*/


//++++++++++++++++++++++++++++++++++++++++++++++
//to print specific content from the obejct in array. ex:coourseTeacher

const arr = [
    {
        courseName: "JavaLearnings",
        courseTeacher: "Hitesh"
    },
    {
        courseName: "PythonLearnings",
        courseTeacher: "Rohit"
    },
    {
        courseName: "CppLearnings",
        courseTeacher: "Ashish "
    }
]

arr.forEach( ( item ) =>{
    console.log(item.courseTeacher);
})
/*
Hitesh
Rohit
Ashish 
*/