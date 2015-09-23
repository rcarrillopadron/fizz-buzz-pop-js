import Command from './Command';

class IsMultipleOfFive extends Command {
    match(number){
        let isDivisibleBy5 = number % 5 === 0;
        return isDivisibleBy5;
    }

    get message() {
        return "Buzz";
    }
}

export default IsMultipleOfFive;