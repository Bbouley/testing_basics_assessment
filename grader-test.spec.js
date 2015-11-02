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

describe('averageScore()', function() {
    it('should find average score', function() {
        expect(grader.averageScore([10,20,15,15])).to.equal(15);
        expect(grader.averageScore([90,95,87,60])).to.equal(83);
        expect(grader.averageScore([80,82,84,86])).to.equal(83);
        expect(grader.averageScore([87,90,60,23,59,99])).to.equal(70);
        expect(grader.averageScore(['l',90,60,null,59,99])).to.equal(77);
        expect(grader.averageScore([0, 0])).to.equal(0);
    });
});

describe('medianScore()', function() {
    it('should find median score', function() {
        expect(grader.medianScore([1,2,3,4,5])).to.equal(3);
        expect(grader.medianScore([2,4,6,8,10,12])).to.equal(7);
        expect(grader.medianScore([8,10,6,4,2,12])).to.equal(7);
        expect(grader.medianScore([1,2,3,4,5,6])).to.equal(3.5);
        expect(grader.medianScore([80,7,90,45,32])).to.equal(45);
        expect(grader.medianScore(['A',2,null,4,undefined])).to.equal(3);
    });
});

describe('modeScore()', function() {
    it('should find mode number', function() {
        expect(grader.modeScore([1,2,1,3,2,2,4,5])).to.equal(2);
        expect(grader.modeScore([98,67,88,23,4,23])).to.equal(23);
        expect(grader.modeScore([1,2,3,4,5])).to.equal('No Mode');
        expect(grader.modeScore(['P',67,88,23,4,23])).to.equal(23);
    });
});
