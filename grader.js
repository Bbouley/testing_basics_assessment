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

// function averageScore(array) {
//     var nums = array.length;
//     var total =

// }

module.exports = {
    letterGrader : letterGrader,
    // averageScore :averageScore
};

