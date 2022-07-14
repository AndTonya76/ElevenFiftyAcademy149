//ELSE IF STATEMENTS

//You are trying to decide what to cook based off of what is in the refrigerator.
//If you have Ground Beef, you'll make Hamburgers.
//If you have Salmon, you'll make Grilled Salmon.
//If you have Chicken, you'll make Chicken Tacos.
//If you don't have anything, you'll order out.
//In code that would look like this:

//Syntax
//1
if (condition1) {
  //  code to be executed if condition1 is true
//2
} else if (condition2) {
  //  code to be executed if the condition1 is false and condition2 is true
//3
} else {
  //  code to be executed if the condition1 is false and condition2 is false
}


let ingredients="chicken",

if (ingredients === "ground beef"){
console.log("I'll make hamburgers.")}

else if (ingredients === "salmon"){
    console.log("I'll make grilled salmon.")}

    else if (ingredients === "chicken"){
        console.log("I'll make chicken tacos!")}

        else {
            console.log("I guess I should order something...")}


//If Statement Example
    let character = 'Wizard'; 
    
    if (character === 'Bard') {
            console.log('You sing nice songs.')
    } else if (character === 'Warrior') {
    console.log('You beat things up.')
    } else if (character === 'Rogue'){
    console.log('You use stealth.')
    } else if (character === 'Wizard'){
    console.log('You use magic.')
    } else {
    console.log('What type of character is this??')
    }       


//Order is Important - Copy the code below and run it in VSCode.
let temp = 85;

if (temp >= 50){
  console.log('It is cool.')
} else if (temp >= 65){
  console.log('It is warm.')
} else if (temp >= 80) {
  console.log('It is hot.')
} else {
  console.log('It is cold.')
}

