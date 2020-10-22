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

// const editSubmission = (array, index, score) => {
//     let student = array.find((student) => {
//         return student === array[index];
//     });
//     student.score = score;
//     student.passed = score >= 60;
// };

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
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

// const findAverageScore = (array) => {
//     let total = 0;
//     for (let submission of array) {
//         total += submission.score;
//     };
//     return total/submissions.length;
// };

// console.log(findAverageScore(submissions));

const findAverageScore = (array) => {
    let total = array.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.score;
    },0);
    return total / array.length; 
};

//the accumulator will be the first object in the array if not specified
//if you need to specify the initial value, include it after the } of the return statement
//this will make the value  


//Number 9 -------------------------------

const filterPassing = (array) => {
    return array.filter((submission) => {
        return item.passed === true;
    })
}

// const filterPassing = (array) => {
//     let newArray = array.filter((submissions)=> {
//         return submissions.passed === true;
//     });
//     return newArray;
// };

// console.log(filterPassing(submissions));



//Number 10 -------------------------------

const filter90AndAbove = (array) => {
    let above90 = array.filter((item)=> {
        return item.score >= 90;
    });
    return above90;
};
console.log(filter90AndAbove(submissions));



//Challenges

const createRange = (start, end) => {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray.push(i);
     }
     return newArray;
};

console.log(createRange(2,9));

const countElements = (array) => {
    let newObject = {};
    array.forEach((item) => {
        if (newObject[item] === undefined) {
            newObject[item] = 1;
        } else {
            newObject[item]++;
        }
    });
    return newObject; 
};

console.log(countElements(["a","b", "c", "a", "b", "c"]));