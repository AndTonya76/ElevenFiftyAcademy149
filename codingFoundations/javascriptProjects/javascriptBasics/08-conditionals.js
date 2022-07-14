//CONDITIONALS INTRODUCTION- Conditional statements are in all  JavaScript applications and check conditions in your program and execute code based on that. 








let snowing = true;
if(snowing == true) {
    console.log("It is snowing outside!");
}// output: "It is snowing outside!"

if (snowing) {
    console.log("It is still snowing.")
}// output: It is still snowing.

let snowing == false;

if {
    console.log("It stopped snowing. It's too warm.")
}


let weather = 65;

if (weather < 70);{
    console.log("Wear a coat'cause it is too dang cold!")
}

//if else - if the first condition is false, then it will run the next block of code as a default.

let kittens = 3;

if (kittens < 1) {
    console.log("I need more kittens.")
} else {
        console.log("I have enouugh kittens.")
}

// else if - specifies a new condition to test, if the first condtion is false.

let apples = 14;

if (apples < 10) {
    console.log("Not enough apples.")
} else if(apples < 15) {
    console.log("Still not enough apples.")
} else {
    console.log("Just right.")
}


// switch statements - executes a block of code depending on different cases.
//NOTE: switch statements are going to act like our conventional conditionals just a different syntax.

//breaks - keyword that breaks out of the switch block. Break stops the execution of more code or case testing inside of the block.
//default - acts as out else keyword
//case - acts as the ( ) to hold our condition
let harryPotterCharacter = "Hermione"

switch (harryPotterCharacter) {
    case "Harry Potter":
        console.log("HP is a whiny boy!");
        break;
        case "Hermione":
            console.log("Great character. 10 out of 10. Would recommend");
            break;
            case "Ron":
                console.log("Eats food I guess.");
                break;
                default:
                    console.log("I'm sorry, ${harryPotterCharacter}, but do I know you?");
}


let dessert = "pie"
    
switch (dessert) {
    case "pie":
        console.log("Pie, pie, pie, me oh my!")
        break;
    case "cake":
        console.log("Cake is great!")
        break;
    case "ice cream":
        console.log("I scream for ice cream!")
        break;
    default:
    console.log("Not on the menu.");
}

//switch statements withmultiple conditions
let num = -40;

switch (true) {
    case num < 0 && num > -10:
        console.log("Hey there!");
        break;
    case num > 0:
        console.log("Hey friend!");
        break;
    default:
        console.log("So long, buddy!")
}

// ternaries - this is the shorthand way of writing out if/else and else/ if statements.
//NOTE: The only difference between ternaries and if/ else is the syntax.

let number = 6;

if (number > 0) {
    console.log("Yes your number is greater then 0.");
} else {
    console.log("No, your number is not greater than 0.")
}

number > 0 
? console.log("Yes your number is greater than 0.")
: console.log("No your number is not greater than 0.")

number == 0
? console.log("Your number is equal to zero.")
: console.log("No your number is not equal to 0.")

/*
CHALLENGE
    Write out a conditional, then switch statement, and then ternary about ages. 
    If you're over the age of 18, print out "Yay! You can vote!"
    If you're over the age of 21, print out "Yay! You can drink!"
    If you're over the age of 25, print out "Yay! You can rent a car!"
    If you're younger than 18, print out "Sorry, you're too young to do anything fun."
*/


switch(true) {     
    case(myAge >= 18 && myAge < 21);
        console.log("Yay! you can Vote!");         
        break;     
    case(myAge >= 21 && myAge <25);     
        console.log("Yay! You can drink!");         
        break;     
    case(myAge >= 25);       
        console.log("Yay! You can rent a car!");
        break;
    default:
        console.log("Sorry, you're too young to do anything fun.");
}
//see notes for this on word doc




/*
  CHALLENGE:
  Create a variable named FB that takes on a number (it can be any number you want)
  Print out "Fizz" if the number is divisible by 3
  Print out "Buzz" if the number is divisible by 5
  Print out "Fizz Buzz" if the number is divisible by 3 and 5
  Print out the number if the number isn't divisible by 3 or 5  division sign should be /

  EXTRA BROWNIE POINTS:
  Convert this to a switch statement and then a ternary.
*/

let FB = 46

if(FB % 3 = 0){
    console.log("Fizz");
} else if (FB / 5 == 0) {
    console.log("Buzz");
} else if (FB / 3 == && FB / 5)











