//ex 1
function calculatePoints(gameResults) {
    var totalPoints = 0;

    for (var i = 0; i < gameResults.length; i++) {
        if (!isNaN(gameResults[i][0]) && !isNaN(gameResults[i][1])) {
            if (gameResults[i][0] > gameResults[i][1]) {
                totalPoints += 2;
            } else if (gameResults[i][0] === gameResults[i][1]) {

                totalPoints += 1;
            }
        }
    }
    console.log("Total points earned by Maccabi Tel Aviv:", totalPoints);
}


var gameResults = [
    [3, 2],
    [1, 1],
    [0, 2] 
];
calculatePoints(gameResults);


//ex 2 
function calculateAverage(data) {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            break;
        }
        sum += data[i];
        count++;
    }

    if (count > 0) {
        return sum / count;
    } else {
        return 0;
    }
}

var data = [9,0,7,3]; 
var average = calculateAverage(data);
console.log("The Average of the data:", average);

//ex 3 

function calculateTotalCost(checksRequested, totalAmountWithoutFees) {
    var totalCost = 0;
    var totalFees = 0;
    var additionalFeesCounter = 0;

    for (var i = 0; i < checksRequested; i++) {
        var baseFee = 10;

        var additionalFee = 0;
        if (totalAmountWithoutFees > 0) {
            if (totalAmountWithoutFees <= 500) {
                additionalFee = 1;
            } else {
                additionalFee = 0.5; 
            }
        }

        totalFees += baseFee + additionalFee;
        additionalFeesCounter++;

        totalAmountWithoutFees -= 100;
       
        totalCost += baseFee + additionalFee;
    }

    
    console.log("Number of checks requested:", checksRequested);
    console.log("Total amount of checks without fees:", totalAmountWithoutFees);
    console.log("Total amount of fees:", totalFees.toFixed(2));
    console.log("Total to be paid (cost + fees):", (totalCost + totalFees).toFixed(2));
}


var checksRequested = prompt("Enter your requested amout:");
var totalAmountWithoutFees = prompt("Your total amount is:");
calculateTotalCost(checksRequested, totalAmountWithoutFees);
