// ARRAYS

/*
    Arrays are container that hol lists of items. They are denoted by there [ ] square brackets. They can hold multiple data types. They are great for creating lists.
*/

/*
    SYNTAX

    let arrayVariableName = [ list1, list2, list3 ];
*/

let groceryList = [milk, eggs, butter, bread, apples, bananas, cereal, hamburger, salad, dressing];

console.log(groceryList); // OUTPUT: Is the entire grocery list
console.log(groceryList.[6])// OUTPUT: cereal. Arrays item counts start count at zero. List item number for milk is 0; cereal is 6.
// BRACKET NOTATAION: - used to step into array and grab a list item.

let students = [Tonya, Cassandra, Nelson, Neisha, Noah, Mallory, 11, true, [Taylor, Laura, Michael]];
console.log(typeof students); // OUTPUT: object. And that's because arrays are objects; as is everything in JavaScript. This is just a cautionary tale of what can happen.
console.log(students instanceof Array);// OUTPUT: True. This answers the question that this is considered an array. instanceof operator is used to check the type of an object at runtime.

// CHALLENGE
// Dive into the nested array and print out the value "Michael"
// Print out "Hello, Michael! Nice to meet you." HINT: Ask Google "How to step into a nested array."
console.log(students [11][0]);// OUTPUT: Michael is the 11th name nested inside the original nest that started at 0.
let studentName = students[11][0];
console.log("Hello, " + studentName + "! Nice to meet you.");// OUTPUT: Hello, Michael! Nice to meet you. CONCATENATION.
console.log(`Hello, ${studentName}! Nice to meet you.`);// OUTPUT: This solution is the same as above. Use backticks and dollar sign and curly brackets.

// ARRAY METHODS
// Array methods allow us to manipulate the data inside of our array or the array itself.

// .lenth - simply returns the number of items in our array.
let foods = [pizza, shrimp, sushi, dino nuggets];
console.log(foods.length); // OUTPUT: Gives the number of items in the array. Answer: 4

// .toString() - this method takes an array and converts it to a string (including all of the items in it).
let randomArray = [5, David, Cheesecake, true, -1000];
console.log(randomArray.toString ()); // OUTPUT: Converts an array into a string. 5DavidCheesecaketrue-1000

// .shift() - removes the first item of the array and return the removed item.
let foods = [pizza, shrimp, sushi, dino nuggets];
console.log("Before : ", );
let firstItem = foods.shift();
console.log("After : ", foods);
//OUTPUT: --> Before: [ pizza, shrimp, sushi, dino nuggets ] --> After: [ shrimp, sushi, dino nuggets ]

let firstItem = foods.shift();
console.log("Shifted Item : ", firstItem); // OUTPUT: Shows pizza was firstItem variable.

// .unshift() - this method adds an item to the beginning of our array.
console.log("Before : ", foods);
foods.unshift(rice and chicken);
console.log("After : ", foods);