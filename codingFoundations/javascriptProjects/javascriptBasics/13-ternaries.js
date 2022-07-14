//Ternaries - for testing a value that will have one of two outcomes (similar to an if else). 

//Syntax
  //1         //2             //3
( condition ) ? run this code : run this code instead
//1.	This is the condition that you're testing.
//2.	After the condition we add a ? and then the code we want to execute if it is true.
//3.	Next we add : and the code we want to run if it is false.

//Ternary Examples: Let's take a look at a following example done with an if/else statement:

let cookies = 5;
if (cookies > 0) {
  console.log("I'm going to eat a cookie!")
} else {
  console.log("I have no cookies :(")
}
That's a lot of code and a lot of lines for just a simple check of what the value of cookies is. We can do better than that!
let cookies = 5;
(cookies > 0) ? console.log("I'm going to eat a cookie!") : console.log("I have no cookies :(")



let color = "blue";

if (color === "purple") {
  console.log(`${color} is my favorite!`)
};




let myAge = 35;

if (myAge > 21) {
  onsole.log("Yay! You can drink!");
  console.log("Yay! You can vote!");
  cosole.log("Yay! You can rent a car!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}

myAge < 0 
? console.log("Yes your number is greater than 0.");
: console.log("No your number is not greater than 0.");

myAge </= 18 ? 
? console.log("Yay! You can vote!");
:? console.log("Sorry, you're too young to do anything fun.");
