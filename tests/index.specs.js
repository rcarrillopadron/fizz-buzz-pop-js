var expect = require('chai').expect;
var calculator = require('../src/index')
var results = calculator.generateValues();

describe('fizz-buzz-pop-js', function () {
    describe('When is not multiple 1 and 7', function () {
        it('should be 1 and 7', function () {
            expect(results[0]).to.equal("1");
            expect(results[6]).to.equal("7");
        });
    });

    describe('When multiple of 3 and 5', function () {
        it('should be FizzBuzz', function () {
            expect(results[14]).to.equal("FizzBuzz");
        });
    });

    describe('When multiple of 3', function () {
        it('should be Fizz', function () {
            expect(results[2]).to.equal("Fizz");
            expect(results[8]).to.equal("Fizz");
        });
    });

    describe('When multiple of 5', function () {
        it('should be Buzz', function () {
            expect(results[4]).to.equal("Buzz");
        });
    });

    describe('When multiple of 2 and 3', function () {
        it('should be Pop', function () {
            expect(results[1]).to.equal("Pop");
            expect(results[3]).to.equal("Pop");
        });
    });

    describe('When multiple of 9', function () {
        it('should be BuzzPop', function () {
            expect(results[9]).to.equal("BuzzPop");
        });
    });

    describe('When multiple of 2, 3 and 5', function () {
        it('should be FizzBuzzPop', function () {
            expect(results[29]).to.equal("FizzBuzzPop");
        });
    });

    describe('When multiple of 2 and 3', function () {
        it('should be FizzPop', function () {
            expect(results[5]).to.equal("FizzPop");
        });
    });
});