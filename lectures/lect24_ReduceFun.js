/* --------------------- X --------- REDUCE COMMAND --------- X -----------------------X */

const myNum = [ 10,20,30,40,50,60,70,80,90,100 ]

const myTotal = myNum.reduce(function(preVal , curnVal) {
    console.log(`PreviousVal: ${preVal} and CurrentVal: ${curnVal}`);
    return preVal + curnVal
},0)
console.log(myTotal);
/*
PreviousVal: 0 and CurrentVal: 10
PreviousVal: 10 and CurrentVal: 20
PreviousVal: 30 and CurrentVal: 30
PreviousVal: 60 and CurrentVal: 40
PreviousVal: 100 and CurrentVal: 50
PreviousVal: 150 and CurrentVal: 60
PreviousVal: 210 and CurrentVal: 70
PreviousVal: 280 and CurrentVal: 80
PreviousVal: 360 and CurrentVal: 90
PreviousVal: 450 and CurrentVal: 100
550
*/




