import Command from './Command';

class IsMultipleOfThreeAndFive extends Command {
    match(number){
        let isDivisibleBy3 = number % 3 === 0;
        let isDivisibleBy5 = number % 5 === 0;
        return isDivisibleBy3 && isDivisibleBy5;
    }

    get message() {
        return "FizzBuzz";
    }
}

export default IsMultipleOfThreeAndFive;