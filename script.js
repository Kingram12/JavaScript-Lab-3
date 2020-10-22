"use strict";

//Number 1 -------------------------------

let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name:"Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]



//Number 2 -------------------------------

const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false
    };
    array.push(newSubmission);
}

addSubmission(submissions, "Kayla", 90, "2020-10-21");

// console.log(submissions);



//Number 3 -------------------------------

const deleteSubmissionByIndex = (array, index) => {
    array.splice (index, 1);
    };

deleteSubmissionByIndex(submissions, 2); 

// console.log(submissions);



//Number 4 -------------------------------

const deleteSubmissionByName = (array, name) => {
 let index = array.findIndex((submission) => {
     return submission.name === name;
 });
 deleteSubmissionByIndex (array, index) 
};

deleteSubmissionByName(submissions, "Joe");

// console.log(submissions);



//Number 5 -------------------------------

const editSubmission = (array, index, score) => {
    let student = array.find((student) => {
        return student === array[index];
    });
    student.score = score;
    student.passed = score >= 60;
};

// console.log(editSubmission(submissions, 0, 80))



//Number 6 -------------------------------

const findSubmissionByName = (array, name) => {
    return array.find((submission) => {
        return submission.name === name;
    });
};

// console.log(findSubmissionByName(submissions, "Jane"));



//Number 7 -------------------------------
// const findLowestScore = (array) => {
//     let lowestScore = 100
//     array.forEach((submission) => {
// if (submission.score < lowestScore) {
//     lowestScore = submission.score;
//     };
//    })
//     let lowest = array.find((submissionScore)=>{
//     return submissionScore.score === lowestScore});
//     console.log(lowest);
// }


const findLowestScore = (array) => {
    let currentLowestObject = array[0];
    array.forEach((submission)=> {
        if (submission.score < currentLowestObject.score) {
            currentLowestObject = submission;
        }
    });
    return currentLowestObject;
};

//console.log(findLowestScore(submissions));



//Number 8 -------------------------------

const findAverageScore = (array) => {
    let total = 0;
    for (let submission of array) {
        total += submission.score;
    };
    return total/submissions.length;
};

console.log(findAverageScore(submissions));

// console.log(findAverageScore(submissions));



//Number 9 -------------------------------

const filterPassing = (array) => {
    let newArray = array.filter((submissions)=> {
        return submissions.passed === true;
    });
    return newArray;
};

// console.log(filterPassing(submissions));



//Number 10 -------------------------------

const filter90AndAbove = (array) => {
    let above90 = array.filter((item)=> {
        return item.score >= 90;
    });
    return above90;
};
console.log(filter90AndAbove(submissions));