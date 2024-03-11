/* 
var n = +prompt("Enter number");
var d = +prompt("Enter digit");
var numberOfAppearance = 0
// 22556636
// xxxx66x6
// 6
var t = n;
while (n !== 0) {
    var rightDigit = n % 10;
    console.log("rightDigit" + "(" + rightDigit + ")" + "===" + "d" + "(" + d + ")")
    if (rightDigit === d) {
        numberOfAppearance++;
    }
    console.log(n)
    n = parseInt(n / 10)

}
console.log("The number is: " + t)
console.log("The numberOfAppearance: " + numberOfAppearance)
 */

//page 28 ex 14
/* 
function reverseDigits(number) {
    var reversedNumber = 0;
    
    while (number !== 0) {
        var digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit; 
        number = parseInt(number / 10); 
    }
    
    console.log("Reversed number:", reversedNumber);
}


var number = +prompt("Enter your number:");
reverseDigits(number); */




//page 28 ex 16
/* 
function multiplyWithoutMultiplication(num1, num2) {
    var product = 0;
    
    while (num2 > 0) {
        product += num1;
        num2--;
    }
    
    console.log("Product:", product);
}

// Example usage:
var num1 = 5;
var num2 = 4;
multiplyWithoutMultiplication(num1, num2); */


//page28 ex 17 

function powerWithoutOperator(base, exponent) {
    // Ensure both numbers are positive
    while (base < 0 || exponent < 0) {
        console.log("Error: Both numbers must be positive.");
        return;
    }

    var result = 1;
    var count = 0;
    
    while (count < exponent) {
        result *= base;
        count++;
    }

    console.log("Result:", result);
}

var base = +prompt("Enter base number:");
var exponent = +prompt("Enter Exponent number:");
powerWithoutOperator(base, exponent);
