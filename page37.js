//ex 17
function findLargestValue(count, data) {

    var largestValue = data[0]; 
    var index = 0;
    var additionalOccurrences = 0;


    for (var i = 1; i < count; i++) {
        if (data[i] > largestValue) {
            largestValue = data[i];
            index = i;
            additionalOccurrences = 0;
        } else if (data[i] === largestValue) {
            additionalOccurrences++;
        }
    }

    console.log("Largest value:", largestValue);
    console.log("Index of the first instance of the largest value:", index);
    console.log("Number of additional occurrences of the largest value:", additionalOccurrences);
}


var count = 5;
var data = [10, 20, 30, 20, 50];
findLargestValue(count, data);


//ex 18 
function findSecondLargest(amount, data) {
    var largestValue = data[0];
    var secondLargestValue = data[0];
    var largestIndex = 0;
    var secondLargestIndex = 0;

    for (var i = 1; i < amount; i++) {
        if (data[i] > secondLargestValue) {
            if (data[i] > largestValue) {
                secondLargestValue = largestValue;
                secondLargestIndex = largestIndex;
                largestValue = data[i];
                largestIndex = i;
            } else {
                secondLargestValue = data[i];
                secondLargestIndex = i;
            }
        }
    }


    console.log("Second largest value:", secondLargestValue);
    console.log("Serial number of the last instance of the second largest value:", secondLargestIndex);
}


var amount = 5;
var data = [10, 20, 30, 20, 50];
findSecondLargest(amount, data);

