import Command from './Command';

class IsMultipleOfTwoAndThree extends Command {
    match(number){
        let isDivisibleBy2 = number % 2 === 0;
        let isDivisibleBy3 = number % 3 === 0;
        return isDivisibleBy2 && isDivisibleBy3;
    }

    get message() {
        return "FizzPop";
    }
}

export default IsMultipleOfTwoAndThree;