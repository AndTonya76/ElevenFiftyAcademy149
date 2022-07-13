// STRING PROPERTIES

/*  
    Properties are qualities associated with a datatype
    Strings have 3 properties
    The length property is the most popular one that developers prominently use.
*/
/*
    SYNTAX
    string.propertyName
*/

// LENGTH PROPERTY - determines the length of a string. Number of characters

//let myName = "Tonya"; 
console.log(myName.length);// OUTPUT is 5. The number of letters in my name. 
//let myName2 = "Tonya is the goat!"; OUTPUT is 18 
console.log(myName2.length);// OUTPUT is 5. The number of all characters, spaces and punctuation. 
// NOTE: The length property accounts for the text, spaces, and punctuation.

// STRING METHODS
// Methods used to help manipulate data.

/*  
    SYNTAX
    string.methodName()
*/

// toUpperCase method - capitalizes your string.
let yourNameIs = "CaSsAnDrA";
console.log(yourNameIs.toUpperCase());// OUTPUT: CASSANDRA

// includes method - this method checks to see if a certain string is "included" (or nested) inside of your string. Does not compare data type; only value.
let home = "My home is Texas";
console.log(home.includes("Texas"));// OUTPUT: TRUE because Texas exists within the string.
console.log(home.includes("texas"));// OUTPUT: False because the " " make it case sensitive. "texas" does NOT exist in our string.

let home2 = "My home is Texas part 2";
console.log(home.includes(2));// OUTPUT: True because the includes method does not compare data types.
//NOTE: The includes method is NOT exclusive to just strings.

// CHALLENGE
/*
    USE GOOGLE! Open book challenge. Research and use the split method to get an array of separate words back from the sentence that is provided.
*/

let sentence= "This sentence is going to be split into individual parts!";

// The split method splits a string into substrings.
//Returns a new array.
// The split method does NOT change the the original string.

let myArray = sentence.split(" ");
console.log(myArray);// Output: Splits into separate words.
console.log(sentence);// Output: Original sentence.
