//CONDITIONALS INTRODUCTION- Conditional statements are in all  JavaScript applications and check conditions in your program and execute code based on that. 


//IF STATEMENTS - are used to check if a single condition is met. The code will be executed if the condition evaluates to true.

//Syntax
//1   //2
if (condition) { //3
//  block of code to be executed if the condition is true
};
//1.	Any if statement must start with the if keyword.
//2.	The condition that is being checked is inside of the parenthesis ( ).
//3.	If the condition evaluates to true the code inside the curly braces { } will execute. If it evaluates to false, the code will not run.

if (10 > 5) {
    console.log("Yep, 10 is greater than 5");
    };

if (10 < 5) {
    console.log("This code will not run! 10 is not greater than 5.");
    };
//When you run both of these lines of code you should only get one  console.log. The condition in Example 2's if statement (10<5) is not true meaning the code in the curly braces after it will not execute. 
