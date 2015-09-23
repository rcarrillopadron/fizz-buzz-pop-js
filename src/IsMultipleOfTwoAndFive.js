import Command from './Command';

class IsMultipleOfTwoAndFive extends Command {
    match(number){
        let isDivisibleBy2 = number % 2 === 0;
        let isDivisibleBy5 = number % 5 === 0;
        return isDivisibleBy2 && isDivisibleBy5;
    }

    get message() {
        return "BuzzPop";
    }
}

export default IsMultipleOfTwoAndFive;