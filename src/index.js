class FizzBuzzPopCalculator {
    generateValues(){
        var MIN_VALUE = 1,
            MAX_VALUE = 100,
            values = [],
            isDivisibleBy2,
            isDivisibleBy3,
            isDivisibleBy5,
            number;

        for (number = MIN_VALUE; number <= MAX_VALUE; number++) {
            isDivisibleBy5 = number % 5 === 0;
            isDivisibleBy2 = number % 2 === 0;
            isDivisibleBy3 = number % 3 === 0;

            if (isDivisibleBy2 && isDivisibleBy5 && isDivisibleBy3) {
                values.push("FizzBuzzPop");
            }
            else if (isDivisibleBy2 && isDivisibleBy5) {
                values.push("BuzzPop");
            }
            else if (isDivisibleBy2 && isDivisibleBy3) {
                values.push("FizzPop");
            }
            else if (isDivisibleBy3 && isDivisibleBy5) {
                values.push("FizzBuzz");
            }
            else if (isDivisibleBy3) {
                values.push("Fizz");
            }
            else if (isDivisibleBy5) {
                values.push("Buzz");
            }
            else if (isDivisibleBy2) {
                values.push("Pop");
            }
            else {
                values.push(number.toString());
            }
        }

        return values;
    }
}

export default FizzBuzzPopCalculator;