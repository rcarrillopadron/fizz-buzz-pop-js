import IsMultipleOfTwoThreeAndFive from './IsMultipleOfTwoThreeAndFive';
import IsMultipleOfTwoAndFive from './IsMultipleOfTwoAndFive';
import IsMultipleOfTwoAndThree from './IsMultipleOfTwoAndThree';
import IsMultipleOfThreeAndFive from './IsMultipleOfThreeAndFive';
import IsMultipleOfThree from './IsMultipleOfThree';
import IsMultipleOfFive from './IsMultipleOfFive';
import IsMultipleOfTwo from './IsMultipleOfTwo';
import IsNotMultiple from './IsNotMultiple';

class FizzBuzzPopCalculator {
    constructor(){
        this.commands = [
            new IsMultipleOfTwoThreeAndFive(),
            new IsMultipleOfTwoAndFive(),
            new IsMultipleOfTwoAndThree(),
            new IsMultipleOfThreeAndFive(),
            new IsMultipleOfThree(),
            new IsMultipleOfFive(),
            new IsMultipleOfTwo(),
            new IsNotMultiple()
        ];
    }

    generateValues() {
        const MIN_VALUE = 1;
        const MAX_VALUE = 100;

        let values = [];

        for (let number = MIN_VALUE; number <= MAX_VALUE; number++) {
            values.push(this.calculateValue(number));
        }

        return values;
    }

    calculateValue(number) {
        let breakIteration = false,
            message = number;
        this.commands.forEach(command => {
            if (command.match(number)) {
                if (breakIteration) {
                    return false;
                } else {
                    message = command.message;
                    breakIteration = true;
                }
            }
        });

        return message;
    }
}

export default FizzBuzzPopCalculator;