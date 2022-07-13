// TYPES

// Anything on the right side of the assignment operator (=). They are the 'values', the data that we store for later. There are two types of data types (at least what we'll be going over today: Primitive and Complex) 

// BOOLEANS
// A boolean has only two types of value: true or false.

let on = true;
console.log(on)

let off = false;
console.lof(off);

// STRINGS 
// Strings are going to represent plain text and will be wrapped in either single or double quotes.
// NOTE: We can use single or double quotes. JS can read them both as strings. HOWEVER, the opening quotation should match the closing quotation.

let quote = "Hello there!";
console. log(quote);

// let quotation = '"This is a quotation"';
let quotation = '"Hello there!"'
console.log(quotation);

let loremIpsum = 
    "ABCDEFGHILJKLMNOPQRSTUVWXYZ"

// NOTE: You can have 9 quadrillion characters in your string.
let noWords = "";

// NUMBERS
// Numbers are going to be quite literally numbers. No special characters required.
// NOTE: We can go up to 9 quadrillion for our numbers.

let temp = 38;
console.log(temp);

let precise = 999999999999999; // 15 9s
console.log(precise)

let rounded = 9999999999999999; // 16 9s
console.log(rounded); // OUTPUT: 10000000000000000 JS is terrible at math and rounds up after a specific amount of characters.

let someMath = 0.2 + 0.1;
console.log(someMath); // OUTPUT: 0.30000000000000004 JS will start to round up (to the 16th place). If math is needed, BEWARE!

let numberAreHard = (0.2 * 10 + 0.1 * 10)/10; // JS CAN do math; just needs extra steps.
console.log(numberAreHard); // OUTPUT: 0.3

// NUMBERS VS STRINGS
let first = 1050 + 100;
console.log(first);// OUTPUT: 1150; Addition. Still a number.

let second = "1050" + "100";
console.log(second); //OUTPUT: 1050100; Concatenation. This is a string combined together to make a single string.
// CONCATENATION - adding one string with another string to combine them to create a single string. The are appended together.

console.log(typeof first);
console.log(typeof second);

let firstName = "Jaycie";
let lastName = "Parker";

let fullName = firstName + " " + lastName;
console.log(fullName);

let third = 1050 + "100";
console.log(third); //OUTPUT: 1050100; Coercion
// COERSION -Is when JS assumes that when we are adding a number and a string together, they are both going to be strings.

// NULL
// Null acts as a value; an empty container.It has nothing in is, but still exists as a space to be filled.

let empty = null;
console.log(empty);

// UNDEFINED
// undefined is similar to null except it holds no value and does not act as am empty container.
let correct;
console.log(correct);

// DO NOT WRITE AS let incorrect = undefined;
//NOTE: You CAN technically do this, it's just not best practice.

// NULL VS UNDEFINED

// Null is a container with nothing in it. Like an assembled box waiting for something to be added.

// Undefined is a variable that has not been assigned a value, nor has it been created yet. Like an unassembled box waiting to be put togeth and have something added to it for shipment.

