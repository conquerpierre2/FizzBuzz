const fizzBuzz = require('./fizzBuzz');


 function fizzBuzzGeneral(number) {
    for(let n = 1; n <= number ; n++) {
        console.log(fizzBuzz(n));
    }
 }

 fizzBuzzGeneral(30);