// OPERATORS

// ASSIGNMENT OPERATOR
// The = sign in between the variableName and values. Helps assign values to our declartions.
let r = 5;

// COMPARISON OPERATOR
//EQUAL TO
console.log(3==3);// OUTPUT: True
console.log("3"== 3);// OUTPUT: True
// COERCION is happening and JS assumes that we are doing "3==3". It converted that number that number into a string.

// STRICT EQUAL TO
console.log("3" === 3); //(Three equals signs) OUTPUT: False
//COERCION does NOT happen here. So strictly equals to is checking the data type and the value.
//Basically, One = "assigns values", == is kind of equal, and === is absolutely equal

// NOT EQUAL TO
console.log("3" != 3 ); //OUTPUT: False because COERCION is happening and "3" does equal "3" (We're not type checking here)

// STRICTLY NOT EQUAL TO
console.log("3" !== 3); //OUTPUT: True because the strong data type of 3 does NOT equal the number 3.

// GREATER THAN
console.log(3 > 2);

// LESS THAN
console.log(2 < 3)

// GREATER THAN OR EQUAL TO
console.log(2 >= 3);

// LESS THAN OR EQUAL TO
console.log(2 <= 3);

// AND &&
console.log(2 < 3 && 3 > 2);// True because both expressions on either side of && are true.
console.log(2 < 3 && 3 < 2);// False because 3 < 2 is false and the other expression is true so the answer is false.
console.log(5 < 4 && 12 > 24);// False because both expressions are false.

// OR ||
console.log(2 < 3 ||  3 < 2);// True because at least one of these expressions are true.

// LOGIC OPERATORS
//ADDITION
r = r + 1;
r += 1;

// SUBTRACTION
r = r -1;
r -= 1;

// MULTIPLICATION
r = r * 1;
r *= 1;

// DIVISION
r = r / 1;
r /= 1;

// EXPONENTIAL or Exponents denoted by the double asteriks
r = r ** 2;
r **=2; 

// MODULUS The output is the remainder in the division problem.
console.log(5 % 2); // The answer is 1 - 5 divided by 2 has a remainder of 1