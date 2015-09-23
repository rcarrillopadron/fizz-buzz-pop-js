import Command from './Command';

class IsMultipleOfTwo extends Command {
    match(number){
        let isDivisibleBy2 = number % 2 === 0;
        return isDivisibleBy2;
    }

    get message() {
        return "Pop";
    }
}

export default IsMultipleOfTwo;