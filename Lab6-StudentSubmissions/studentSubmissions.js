let submissions = [
{name: "Jane", score : 95, date : "2020-01-24", passed : true}, 
{name: "Joe", score : 77, date : "2018-05-14", passed : true}, 
{name: "Jack", score : 59, date : "2019-07-05", passed : false}, 
{name: "Jill", score : 88, date : "2020-04-22", passed : true}];

function addSubmission(array, newName, newScore, newDate){
    //Check to see if they passed or failed
  let newSubmission = {
    name : newName,
    score : newScore,
    date : newDate,
  }

    newSubmission.score >= 60? newSubmission.passed = true : newSubmission.passed = false;
 
    //push to my submissions array

    array.push(newSubmission);
    console.log(array);
}

//I need to have an object with a name, score, date
addSubmission(submissions, "Sally", 40, "2020-01-01");

function deleteSubmissionByIndex(array,index) {
    return array.splice(index,1)
}

console.log(deleteSubmissionByIndex(submissions,2))

function deleteSubmissionByName(array,name) {
    //check to see if name in array
    let index = array.findIndex(i => i.name === name) 
    if(index > -1){array.splice(index,1)}
    console.log(array)
    
}

console.log(deleteSubmissionByName(submissions,"Jill"))

function editSubmission(array,index,score) {
     array[index].score = score;
     array[index];

    //update score at specified index
    let updateScore = {score : score}
    // conditional statement id they passed or not

     score >= 60 ? array[index].passed = true : array[index].passed = false;

    array.splice(index,1,updateScore)
    console.log(array)
    
}

console.log(editSubmission(submissions, 1, 59))

function findSubmissionByName(array,name) {
    return array.find(f => f.name === name)
}

console.log(findSubmissionByName(submissions,"Jack"))

function findLowestScore(array) {
    let lowestScore = array[0]
    array.forEach((e) => {
        if (e.score < lowestScore.score) {
            lowestScore = e;
        }
    });
    return lowestScore;
    
}

console.log(findLowestScore(submissions))

function findAverageScore(array) {
    let total = 0;
   for (let arrays of array) {
    total += arrays.score
}
    return total / array.length
}
   
console.log(findAverageScore(submissions))

function filterPassing(array) {
    return array.filter(f => f.passed)
}

console.log(filterPassing(submissions))

function filter90AndAbove(array) {
    return array.filter(f => f.score >= 90)
}

console.log(filter90AndAbove(submissions))