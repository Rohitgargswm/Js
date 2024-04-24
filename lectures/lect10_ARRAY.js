/*------------------ ARRAY  ------------------*/

// const arr = [15,65,78,44,88];
// console.log(arr[1]);     // used to tell element on the given index. ex- at arr[1] there is 65


/* --------------------- X -------------- PUSH/POP PART------------- X -----------------------X */

// const arr = [15,65,78,44,88];
// console.log(arr);                 //[ 15, 65, 78, 44, 88 ]
// arr.push(84)                      // [ 15, 65, 78, 44, 88, 84 ]  push is used to push the given input at last space
// console.log(arr);


// const arr = [15,65,78,44,88];
// arr.pop()                       // used to pop out the last element
// console.log(arr);


/* --------------------- X -------------- SHIFT/UNSHIFT PART------------- X -----------------------X */


// const arr = [15,65,78,44,88];
// console.log(arr.shift())          // used to delete 1st element of the array
// console.log(arr.unshift(879));    // used to add the given element at 1st position. NOTE: Not prefered due to complete change in the indexing of the element.
// console.log(arr);



/* --------------------- X -------------- (FOR THE INFO OF ARRAY) PART------------- X -----------------------X */

// const arr = [15,65,78,44,88];
// console.log(arr.includes(44));       // o/p: true    tells that do the array contains the given no. or not in TRUE or FALSE method.
// console.log(arr.indexOf(78));        //o/p: 2    tells the index of given element. NOTE: if not then it will show -1.


// const arr = [15,65,78,44,88];
// const newArr = arr.join()            // o/p:15,65,78,44,88   arr.join made the 'newArr' of string type
// console.log(newArr);                 // o/p: string
// console.log(typeof newArr)


/* --------------------- X -------------- SLICE / SPLICE ------------- X -----------------------X */

// const arr = [15,65,78,44,88,55,984];

// console.log("Original ARRAY:" , arr);   //Original ARRAY:[15,65,78,44,88,55,984]
// const myna1 = arr.slice(1 , 5)          // it will help to show element from 1 to n-1 element given in range
// console.log("After slice:" , myna1);    // After slice: [ 65, 78, 44, 88 ]  ,bcoz (1,(5-1=4))

// const myna2 = arr.splice(1 , 5) 
// console.log("After splice:" , myna2);   //After splice: [ 65, 78, 44, 88, 55 ]
// console.log("And remaining arr after splice:" , arr);  //And remaining arr after splice:[ 15, 984 ]
 
/*               diff b/w slice and splice:
 
 .           [slice]                                        [Splice]
---------------------------------------------------------------------------------
  -> it it will help to show                  -> it will help to show element from
  element from 1 to n-1 element                  1 to n element in the given range. 
  given in range.                               

  -> ex: slice(1,5) which means               -> NOTE: But splice will also deduct 
        from 1 index to 5-1= 4th                       the element from the original array.
        index                                 -> ex: splice(1 , 5) which means from index 1 
 .                                                   to n index. And the orginal array will deduct
 .                                                   this positon from the original one.

 */


 /* --------------------- X -------------- MERGE OF AN ARRAY ------------- X -----------------------X */

// const girls = ["Divya" , "Ishita" , "Nilisha" , "Ishika"]
// const boys = ["Rohit" , "Utsav" , "Anand" , "Balu"]
// boys.push(girls)     // this will add whole girls array as an element in boys array
// console.log(boys);     // o/ : ["Rohit" , "Utsav" , "Anand" , "Balu" ,  ["Divya" , "Ishita" , "Nilisha" , "Ishika"] ]
// console.log(boys[0] + boys[4][2]);    //boys[4][2] means element 2 of element 4 which is Nilisha


// const girls = ["Divya" , "Ishita" , "Nilisha"]
// const boys = ["Rohit" , "Utsav" , "Anand" , "Balu"]
// const frnds = boys.concat(girls)  //concat is used to merge array and makes new array in new variable
// console.log(frnds);     // o/ : ["Rohit" , "Utsav" , "Anand" , "Balu" , "Divya" , "Ishita" , "Nilisha"]



// const girls = ["Divya" , "Ishita" , "Nilisha"]
// const boys = ["Rohit" , "Utsav" , "Anand" , "Balu"]
// const frnds = [...boys , ...girls]  /// ...(triple dots) are used to seprate the elements of the node and merge all the elements in new array name frnds.
// console.log(frnds);  // o/: ["Rohit" , "Utsav" , "Anand" , "Balu" , "Divya" , "Ishita" , "Nilisha"]


/* --------------------- X -------------- spreading of array ------------- X -----------------------X */


// const num = [1 , 2 , [3,4,5] , 45 , [54,65,23,[866,960]]]
// const another_num = num.flat(Infinity)   // flat command is used for pushing all nested array in array as an element outside from the array to get elmnt into a single array
// console.log(another_num);  // o/: [ 1 , 2 , 3 , 4 , 5 , 45 , 54 , 65 , 23 , 866 , 960 ]


/* --------------------- X --------------------------- X -----------------------X */

// console.log(Array.isArray("ROHIT"));  // [output: False ] as ROHIT is not an array
// console.log(Array.from("ROHIT"));     // output: [ 'R', 'O', 'H', 'I', 'T' ]  . As we made array from the given syntax


/* --------------------- X --------------------------- X -----------------------X */

// let roll1 = 185
// let roll2 = 188
// let roll3 = 189
// console.log(Array.of(roll1 , roll2 , roll3));
// //output: [ 185, 188, 189 ]


/* --------------------- X --------------------------- X -----------------------X */




