function sumNumbers(a, b) {
    return a + b;
}

var number1 = 8;
var number2 = 4;
var result = sumNumbers(number1, number2);
console.log("The sum of", number1, "and", number2, "is:", result);

function maxNumber(a, b) {
    return Math.max(a, b);
}

var number1 = 10;
var number2 = 6;
var max = maxNumber(number1, number2);
console.log("The maximum of", number1, "and", number2, "is:", max);

function minNumber(a, b, c) {
    return Math.min(a, b, c);
}

var number1 = 2;
var number2 = 4;
var number3 = 9;
var min = minNumber(number1, number2, number3);
console.log("The minimum of", number1 + ",", number2 + ",", "and", number3, "is:", min);

function hasApple(product1, product2) {
    
    var lowerProduct1 = product1;
    var lowerProduct2 = product2;

    
    if (lowerProduct1 === "apple" || lowerProduct2 === "apple") {
        return true;
    } else {
        return false;
    }
}


var product1 = "Orange";
var product2 = "Apple";
console.log("One of the products is 'apple':", hasApple(product1, product2));

var product3 = "Banana";
var product4 = "Grape";
console.log("One of the products is 'apple':", hasApple(product3, product4));
