Number.prototype.isMultipleOf = function(number) {
    return this % number === 0;
}

function fizzBuzz(number) {
    if (number.isMultipleOf(5) && number.isMultipleOf(3)) {
        return 'FizzBuzz';
    }
    else if (number.isMultipleOf(5)) {
        return 'Buzz';
    } 
    else  if (number.isMultipleOf(3)){
      return 'Fizz';
    } else {
        return number;
    }
}


module.exports = fizzBuzz;

