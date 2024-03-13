//page 32 ex 4

 var input = prompt("Enter a number:");
var number = parseInt(input);
var digits = [];


while (number > 0) {
    var digit = number % 10;
    digits.push(digit);
    number = parseInt(number / 10);
}

digits.sort((a, b) => a - b);

console.log("Digits sorted in order:");
console.log(digits.join(", ")); 

//page 32 ex 5 

/* var start = 1;
var stop = 100;
var count = 0;
var number = start;

while (number <= stop) {
    var isPrime = true;
    var divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }
    
    if (isPrime) {
        count++;
    }

    number++;
}

console.log("Number of prime numbers:", count); */
