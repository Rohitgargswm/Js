/*------------------ For loop ------------------*/

// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element);
// }
/* output:
0
1
2
3
4
*/

//++++++++++++++++++++++++++++++++++++

// const array = [12 , 50 , 654 , 564 ,5546 ]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }
/* output:
12
50
654
564
5546
*/

//++++++++++++++++++++++++++++++++++++

// for (let i = 0; i < 6; i++) {
//     const element = i;
//     if (i==3) {
//         console.log("Condition checked");
//     }
//     console.log(element);
// }
/* output:
0
1
2
Condition checked
3
4
5
*/

/* --------------------- X ----------NESTED LOOP------------ X -----------------------X */

// for (let i = 0; i < 6; i++) {
//     console.log("Outer loop value:" , i);
//     for (let j = 0; j < 6; j++) {
//         console.log(`for outer loop value ${i} new inner loop's value is ${j}`);
        
//     }
// }
/*Output:
Outer loop value: 0
for outer loop value 0 new inner loop's value is 0
for outer loop value 0 new inner loop's value is 1
for outer loop value 0 new inner loop's value is 2
for outer loop value 0 new inner loop's value is 3
for outer loop value 0 new inner loop's value is 4
for outer loop value 0 new inner loop's value is 5
Outer loop value: 1
for outer loop value 1 new inner loop's value is 0
for outer loop value 1 new inner loop's value is 1
..
..
*/

//+++++++++++++++++++++++++++++++++++++++++

// for (let i = 1; i <= 1 ; i++) {
    
//     for (let j = 1; j <= 10; j++) {
//         console.log( i + " * " + j + " = " + i*j);
//     }
// }
/* Output:
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
*/

/* --------------------- X ---------BREAK / CONTINUE---------- X -----------------------X */

//Break syntax
// for (let i = 1; i < 8; i++) {
//     if (i==4) {
//         console.log("detected 4");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
detected 4
*/



// Continue syntax
for (let i = 1; i < 8; i++) {
    if (i==4) {
        console.log("detected 4");
        continue;
    }
    console.log(`Value of i is ${i}`);
}
/*
Value of i is 1
Value of i is 2
Value of i is 3
detected 4
Value of i is 5
Value of i is 6
Value of i is 7
*/




