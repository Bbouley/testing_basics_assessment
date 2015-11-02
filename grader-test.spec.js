var chai = require('chai');
var grader = require('./grader');
var expect = chai.expect;


describe('grader()', function() {
    it('should equal 1', function() {
        expect(grader.letterGrader(98)).to.equal('A+');
        expect(grader.letterGrader(94)).to.equal('A');
        expect(grader.letterGrader(90)).to.equal('A-');
        expect(grader.letterGrader(89)).to.equal('B+');
        expect(grader.letterGrader(85)).to.equal('B');
        expect(grader.letterGrader(82)).to.equal('B-');
        expect(grader.letterGrader(78)).to.equal('C+');
        expect(grader.letterGrader(75)).to.equal('C');
        expect(grader.letterGrader(70)).to.equal('C-');
        expect(grader.letterGrader(68)).to.equal('D+');
        expect(grader.letterGrader(64)).to.equal('D');
        expect(grader.letterGrader(61)).to.equal('D-');
        expect(grader.letterGrader(4)).to.equal('F');
        expect(grader.letterGrader(110)).to.equal('IMPOSSIBLE');
        expect(grader.letterGrader(-9)).to.equal('IMPOSSIBLE');
        expect(grader.letterGrader('ba')).to.equal('IMPOSSIBLE');
    });
});

// describe('averageScore()', function() {
//     it('should find average score', function() {
//         expect(grader.averageScore([10,20,15,15])).to.equal(15);
//         expect(grader.averageScore([90,95,87,60])).to.equal(83);
//         expect(grader.averageScore([80,82,84,86])).to.equal(83);
//         expect(grader.averageScore([87,90,60,23,59,99])).to.equal(70);
//     });
// });
