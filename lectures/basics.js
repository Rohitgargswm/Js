/*
Commands in javascript are CASE SENSITIVE

8 Data types in javascript:
 ->String
 ->Number
 ->Boolean
 ->BigInt
 ->undefined
 ->null
 ->Symbol
 ->Object
*/

/*                   ARRAY                          
ARRAY is an 'OBJECT' type of data type , it enables storing a collection of multiple items under
 a single variable.
-> an ARRAY can contain mix type of data types in it.
*/


/*------------------ SCOPE  ------------------*/

/*
  SCOPE are of two types:
  1.Global Scope:->parameters / arguments / values outside the function or object.

  2.Blocked Scope:  parameters / arguments / values inside the function or object.
  .                -> parameters/arguments/values inside the function or object can't be used outside
*/


/*------------------ CONTROL FLOW basics  ------------------*/ /*

7==7     true     [ '==' compares value only]
7=="7"   true     
7===7    true 
7==="7"  false    [ '===' compares data type too. ]


In if-Else case when we are using conditional based question compilor traverase right to left.

*/

// function varible(){
//     var a = 52
//     function varible2() {
//       var add = a + 5
//       console.log(add);
//     }
//     varible2()
//     // const addFun = add+ a
//     // console.log(addFun);
// }
// varible()



/*------------------ FALSE/FALSY CONDITIONS  -----------------

Some defualt false/falsy assumed conditions are:
FALSE , 0 , -0 , NULL , NaN , undefined , BigInt 0n , "" .


---------------------  TRUE CONDITIONS  --------------------
Some defualt TRUE assumed conditions are:
TRUE , 1 , BigInt 1n , {} , [] 
*/



/* 
NULLISH COALESCING operator '??' 
val1 = NULL ?? 10   // Whenever by any occurance or intentionally whenever we will be getting
.                       NULL value, program will give val1= 10      
*/