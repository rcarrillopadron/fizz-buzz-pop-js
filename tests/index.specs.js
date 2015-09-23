import FizzBuzzPopCalculator from '../src/index.js';
import { expect } from 'chai';

describe('fizz-buzz-pop-js tests', () => {
    let results = [];

    beforeEach(() => {
        let calculator = new FizzBuzzPopCalculator();
        results = calculator.generateValues();
    });

    describe('When is not multiple 1 and 7', () =>
        it('should be 1 and 7', () => {
            expect(results[0]).to.equal("1");
            expect(results[6]).to.equal("7");
        })
    );

    describe('When multiple of 3 and 5', () =>
        it('should be FizzBuzz', () => expect(results[14]).to.equal("FizzBuzz"))
    );

    describe('When multiple of 3', () =>
        it('should be Fizz', function () {
            expect(results[2]).to.equal("Fizz");
            expect(results[8]).to.equal("Fizz");
        })
    );

    describe('When multiple of 5', () =>
        it('should be Buzz', () => expect(results[4]).to.equal("Buzz"))
    );

    describe('When multiple of 2 and 3', () =>
        it('should be Pop', function () {
            expect(results[1]).to.equal("Pop");
            expect(results[3]).to.equal("Pop");
        })
    );

    describe('When multiple of 9', () =>
        it('should be BuzzPop', () => expect(results[9]).to.equal("BuzzPop"))
    );

    describe('When multiple of 2, 3 and 5', () =>
        it('should be FizzBuzzPop', () => expect(results[29]).to.equal("FizzBuzzPop"))
    );

    describe('When multiple of 2 and 3', () =>
        it('should be FizzPop', () => expect(results[5]).to.equal("FizzPop"))
    );
});