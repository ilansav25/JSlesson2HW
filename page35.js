//ex 4 
/*  var n = +prompt("enter the number to get number added with number 3:")
var sum = 0;
for (var index = 0; index <= n; index++) {
    if(index % 3 == 0){
        sum = sum + index
    }
}
console.log(sum)  */

// //ex 6 
// var num = +prompt("Enter sum number")
// var sum = 0;
// for (var index = 0; index <= num; index++) {
//     sum = sum + Math.pow(2 , index)
// }
// console.log(sum)

//ex 7

function printSeries(N) {
    var numberA = N;
    var numberB = N * 5; 
    while (numberA > 0) {
        console.log("Series A -", numberA);
        console.log("Series B -", (numberB * 0.2).toFixed(0));
        numberA--;
        numberB -= 5;
    }
}

var N = 5;
printSeries(N);

//ex 8 

function sumDivisibleNumbers(N) {
    var sum = 0;
    var loops = 0; 

    for (var i = 1; i <= N; i++) {
        loops++;
        if (i % 4 === 0 || i % 7 === 0) {
            sum += i;
        }
    }

    console.log("The sum of numbers divisible by 4 or 7 up to", N, "is:", sum);
    console.log("Number of loops needed:", loops);
}


var N = 10;
sumDivisibleNumbers(N);
