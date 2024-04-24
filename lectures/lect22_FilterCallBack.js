/*------------------------- FILTER COMMAND -------------------------*/
// FILTER command is used for filtering the things.


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.filter( (num) => {
//     return num>5;
// } )
// console.log(newNum);                 // [ 6, 7, 8, 9, 10 ]


/* --------------------- X ---------------------- X -----------------------X */

const bookInfo = [
    {
        bookName: 'hhh',
        bookPub: '1912',
        bookPage: 989
    },
    {
        bookName: 'iii',
        bookPub: '1923',
        bookPage: 488
    },
    {
        bookName: 'nnn',
        bookPub: '1934',
        bookPage: 546
    },
    {
        bookName: 'rlfh',
        bookPub: '1999',
        bookPage: 2400
    },
]

const book = bookInfo.filter((bk) => { return bk.bookPage >='550'})
console.log(book);
//output: [ { bookName: 'hhh', bookPub: '1912', bookPage: '989' } ]


// const book = bookInfo.filter((bk) => bk.bookPage === '546')
// console.log(book);
// output:  [ { bookName: 'nnn', bookPub: '1934', bookPage: '546' } ]



// const book = bookInfo.filter((bk) => { return bk.bookPub === '1999' && bk.bookPage === '2400'})
// console.log(book);
// //[ { bookName: 'rlfh', bookPub: '1999', bookPage: '2400' } ]

















