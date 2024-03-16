//ex 1
function calculatePoints(results) {
    var totalPoints = 0;

    for (var i = 0; i < results.length; i++) {
        var gamePoints = results[i][0] > results[i][1] ? 2 : results[i][0] === results[i][1] ? 1 : 0;
        totalPoints += gamePoints;
    }
    return totalPoints;
}


var results = [
    [3, 2], 
    [1, 1], 
    [0, 2]  
];
var points = calculatePoints(results);
console.log("Points earned by Maccabi Tel Aviv:", points);
