/* --------------- X ----------- High Order loops (part-2) ----------- X ------------------X */


/*----- MAPS  -----*/

// const unqID = new Map()
// unqID.set('RJ' , " Rajasthan ")
// unqID.set('DL' , " Delhi ")
// unqID.set('GJ' , " Gujarat ")
// console.log(unqID);
/*
Map(3) {
  'RJ' => ' Rajasthan ',
  'DL' => ' Delhi ',
  'GJ' => ' Gujarat '
}
*/

//++++++++++++++++++++++++++++++++++++++++++++++++

//to make individual entries in array.
// const unqID = new Map()
// unqID.set('RJ' , " Rajasthan ")
// unqID.set('DL' , " Delhi ")
// unqID.set('GJ' , " Gujarat ")

// for (const val1 of unqID) {
//     console.log(val1);
// }
/*
[ 'RJ', ' Rajasthan ' ]
[ 'DL', ' Delhi ' ]
[ 'GJ', ' Gujarat ' ]
*/


//++++++++++++++++++++++++++++++++++++++++++++++++

//to get every entry as an individuality.(output should not be in array or object or any other form)

// const unqID = new Map()
// unqID.set('RJ' , " Rajasthan ")
// unqID.set('DL' , " Delhi ")
// unqID.set('GJ' , " Gujarat ")

// for (const [val1 , notaion ] of unqID) {
//     console.log(val1 , ":" , notaion);
// }
/*
RJ :  Rajasthan 
DL :  Delhi 
GJ :  Gujarat 
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++

// const myObj = {
//   mc: 'Madarchomd',
//   bc : 'Betichomad',
//   bkl : 'Bhen-ke-Lumd'
// }
// for (const key in myObj) {
//   console.log(key);
// }
/* outoput shows the key value
mc
bc
bkl
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++

const myObj = {
  mc: 'Madarchomd',
  bc : 'Betichomad',
  bkl : 'Bhen-ke-Lumd'
}
for (const key in myObj) {
  console.log(`${key} is the shorcut for ${myObj[key]} `);
}
/*
mc is the shorcut for Madarchomd 
bc is the shorcut for Betichomad 
bkl is the shorcut for Bhen-ke-Lumd
*/


 