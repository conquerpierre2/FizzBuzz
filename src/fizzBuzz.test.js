const fizzBuzz = require('./fizzBuzz');

test("Displays Fizz if the given number is 3 ", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test("Displays Fizz if the given number is a multiple of 3 ", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
})

test("Displays Buzz if the given number is 5 ", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test("Displays Buzz if the given number is a multiple of 5 ", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})

test("Displays FizzBuzz if the given number is a multiple of 5 and 3 ", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test("Displays this number if the given number is not a  multiple of 5 nor 3 ", () => {
    expect(fizzBuzz(1)).toBe(1);
})