// Sorry for all the comments, if it is too much I will tone it down for the next lab but this really helped me understand a lot

// SpecOne
// Declare a variable named submissions that is initialized to an array with the following objects:
// name, score, passed
// Jane, 95, true
// Joe, 77, true
// Jack, 59, false
// Jill, 88, true

const submissions = [
    {name: "Jane", score: 95, passed: true, },
    {name: "Joe", score: 77, passed: true, },
    {name: "Jack", score: 59, passed: false, },
    {name: "Jill", score: 88, passed: true, },
];
console.log("Student Submissions:", submissions);

// specTwo
// Declare a function named addSubmission
// Parameter(s): array, newName, newScore
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore) => {
    const newPerson = {name: newName, score: newScore}
    const newPassed = newScore >= 60 ? true : false;
    newPerson.passed = newPassed
    // newPerson["passed"] = newPassed  //bracket notation practice
    array.push(newPerson);
};
// testing below to see if they work
addSubmission(submissions, "Josh", 77);
addSubmission(submissions, "Aaron", 59);
addSubmission(submissions, "Troy", 95);
console.log("New Submissions:", submissions);

// specThree
// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove an object from the `array` at the specified `index` using the splice method.

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 4); // removes Josh at index 4 from the submissions
deleteSubmissionByIndex(submissions, 4); // since Josh is removed, Aaron moves up in the index to the 4th spot
console.log("Submissions After Deleting by Index", submissions);


// specFour
// Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided `name`.  Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((submission) => submission.name === name);
    if (index !== -1) array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Troy");
console.log("Submissions After Deleting by Name", submissions);

// specFive
// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s `score` in the `array` at the specified `index`. Use conditional statements to set the value for the `passed` property to `true` if the score is greater than or equal to 60 and `false` otherwise. No array method necessary.

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
};
editSubmission(submissions, 0, 89);
console.log("Editeded Submissions", submissions);
// Changing Jane's score back to 95
editSubmission(submissions, 0, 95);

// specSix
// Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the obejct in the `array` that has the provided `name`. Use the find method.

const findSubmissionByName = (array, name) => array.find((sub) => sub.name === name);
const findJane = findSubmissionByName(submissions, "Jane");
console.log("Find Submission by Name", findJane);

// findSubmissionByName(submissions, "Jane");
// console.log("Find Submission by Name", submissions);  
// Had troubles logging this one...

// specSeven
// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the `array` that has the lowest score.

const findLowestScore = (array) => {
    let lowestScore = 100;
    array.forEach((sub) => {
        const lowerScore = sub.score <= lowestScore ? true : false;
        // console.log(lowerScore) testing if the forEach iterator works
        if (lowerScore === true) {
            lowestScore = sub.score
        }
    });
    return lowestScore;
}
findLowestScore(submissions)
console.log("Lowest Score:", findLowestScore(submissions));
// halfway done, gotta return something look up let if ex. on w3s this comment was on line 77

// specEight
// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.

const findAverageScore = (array) => {
    let totalScore = 0;
    array.forEach((sub)=> {
        totalScore += sub.score;
    }); 
    const averageScore = totalScore / array.length;
    return averageScore
};
findAverageScore(submissions)
console.log("Average Score:", findAverageScore(submissions));

// specNine
// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the `array` that have passing scores.

const filterPassing = (array) => array.filter((sub) => sub.passed === true);
filterPassing(submissions);
console.log("Passing Submissions:", filterPassing(submissions));

// specTen
// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the `array` that have scores greater than or equal to 90.

const filter90AndAbove = (array) => array.filter((sub) => sub.score >= 90);
filter90AndAbove(submissions)
console.log("Submissions 90 and Above:", filter90AndAbove(submissions));

// Extended Challenges Specs
// extendedSpecOne
// Create a function named createRange
// Parameter(s): start, end
// Functionality: construct and return an array of integers starting with the start parameter and ending at the end parameter. e.g `createRange(2, 5)` returns `[2, 3, 4, 5]`.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const createRange = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};
const result = createRange(2,5);
console.log(result);

// extendedSpecTwo
// Create a function named countElements
// Parameter(s): array (an array of strings)
// Functionality: construct and return an object with the array values as keys and the number of times that key appears in the array as values. e.g. `countElements(['a', 'b', 'a', 'c', 'a', 'b'])` returns `{ a: 3, b: 2, c: 1 }`.
