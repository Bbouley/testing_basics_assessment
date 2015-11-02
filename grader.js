function letterGrader(score) {
    switch(true) {
        case score > 97 && score <= 100 : return 'A+';
        case score >= 93 && score <= 97 : return 'A';
        case score >= 90 && score < 93 : return 'A-';
        case score > 87 && score < 90 : return 'B+';
        case score >= 83 && score <= 87 : return 'B';
        case score >= 80 && score < 83 : return 'B-';
        case score > 77 && score < 80 : return 'C+';
        case score >= 73 && score <= 77 : return 'C';
        case score >= 70 && score < 73 : return 'C-';
        case score > 67 && score < 70 : return 'D+';
        case score >= 63 && score <= 67 : return 'D';
        case score >= 60 && score < 63 : return 'D-';
        case score < 60 && score > 0 : return 'F';
        default : return 'IMPOSSIBLE';
    }
}

function averageScore(array) {
    var nums = 0;
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number' && array[i] !== null) {
            total += array[i];
            nums += 1;
        }
    }
    if(nums === 0 && total === 0) {
        return 0;
    } else {
        var output = Math.round(total/nums);
        return output;
    }
}

function medianScore(array) {
    var sortedArray = getNums(array).sort(sortNumber);
    if(sortedArray.length % 2 === 0) {
        var indexTop = (sortedArray.length/2);
        var indexBottom = (sortedArray.length/2) - 1 ;
        var output = (sortedArray[indexTop] + sortedArray[indexBottom]) / 2;
        return output;
    } else {
        var index = Math.floor(array.length/2);
        return sortedArray[index];
    }
}

function modeScore(array) {
    var count = {};
    var numArray = getNums(array);
    for (var i = 0; i < numArray.length; i++) {
        if(count[numArray[i]] === undefined) {
            var value = 1;
            count[numArray[i]] = value;
        } else {
            count[numArray[i]] += 1;
        }
    }

    var score = 0;
    var num = 0;

    for (var j in count) {
        if(count[j] > score) {
            score = count[j];
            num = j;
        }
    }

    if(score === 1) {
        return 'No Mode';
    } else {
        return parseInt(num);
    }
}


// *** helper functions *** //

function sortNumber(a, b) {
    return a - b;
}

function getNums(array) {
    var onlyNums = [];
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            onlyNums.push(array[i]);
        }
    }
    return onlyNums;
}


module.exports = {
    letterGrader : letterGrader,
    averageScore :averageScore,
    medianScore : medianScore,
    modeScore : modeScore
};

