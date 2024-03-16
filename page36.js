//ex 15 

var totalScore = 0;
var successfulCount = 0;


for (var i = 0; i < 100; i++) {
    var studentName = "Student " + (i + 1);
    var grade = Math.floor(Math.random() * 101); 
    
  
    console.log(studentName + ": " + grade);

    if (grade > 70) {
        totalScore += grade;
        successfulCount++;
    }
}

var averageScore = successfulCount > 0 ? totalScore / successfulCount : 0;

console.log("Successful students:");
console.log("Average score of successful students:", averageScore.toFixed(2));
