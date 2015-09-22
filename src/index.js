var generateValues = function () {
    var MIN_VALUE = 1,
        MAX_VALUE = 100,
        results = [],
        isDivisibleBy2,
        isDivisibleBy3,
        isDivisibleBy5,
        number;

    for (number = MIN_VALUE; number <= MAX_VALUE; number++) {
        isDivisibleBy5 = number % 5 == 0;
        isDivisibleBy2 = number % 2 == 0;
        isDivisibleBy3 = number % 3 == 0;

        if (isDivisibleBy2 && isDivisibleBy5 && isDivisibleBy3) results.push("FizzBuzzPop");
        else if (isDivisibleBy2 && isDivisibleBy5) results.push("BuzzPop");
        else if (isDivisibleBy2 && isDivisibleBy3) results.push("FizzPop");
        else if (isDivisibleBy3 && isDivisibleBy5) results.push("FizzBuzz");
        else if (isDivisibleBy3) results.push("Fizz");
        else if (isDivisibleBy5) results.push("Buzz");
        else if (isDivisibleBy2) results.push("Pop");
        else results.push(number.toString());
    }

    return results;
};

module.exports = {
    generateValues: generateValues
};
