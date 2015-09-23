import Command from './Command';

class IsMultipleOfThree extends Command {
    match(number){
        let isDivisibleBy3 = number % 3 === 0;
        return isDivisibleBy3;
    }

    get message() {
        return "Fizz";
    }
}

export default IsMultipleOfThree;