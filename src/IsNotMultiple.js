import Command from './Command';

class IsNotMultiple extends Command {
    match(number){
        this.number = number;
        let isDivisibleBy2 = number % 2 === 0;
        let isDivisibleBy3 = number % 3 === 0;
        let isDivisibleBy5 = number % 5 === 0;
        return !isDivisibleBy2 && !isDivisibleBy3 && !isDivisibleBy5;
    }

    get message() {
        return this.number.toString();
    }
}

export default IsNotMultiple;