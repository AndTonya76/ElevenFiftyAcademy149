//PARAMETERS - A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions. The actual information passed is called an argument.

/*  the name of the parameter should reflect some type of relations with the data expted to be passed when the function is being executed.*/
//    function nameFunc(parameter1, parameter2)
//     console.log(`This is ${parameter1}. They are $({parameter2} years old.`) 

function coffeeTypes(brew){
    console.log(`This ${brew} coffee tastes great.`)
}

coffeeTypes("dark roast")
coffeeTypes("caramel")
coffeeTypes("peppermint")

//Function reference
let cupOfCoffee = coffeeTypes
cupOfCoffee("Hot Cocoa")/*Output:This dark roast coffee tastes great.
This caramel coffee tastes great.
This peppermint coffee tastes great.
This Hot Cocoa coffee tastes great. */

// MULTIPLE PARAMETERS

function tellBio (name, age, height, hairColor) {
    console.log(`This is ${name}\nAge:${age}\nHeight:${height}\nhairColor:${hairColor}`)
}

tellBio("Michael Jordan", 66, "6'6", "bald")
tellBio("Tonya Anderson", 45, "5'9", "brown")
/*Output:This is Michael Jordan
Age:66
Height:6'6
hairColor:bald

This is Tonya Anderson
Age:45
Height:5'9
hairColor:brown*/

//RETURN VALUES
function calc(num1, num2, num3){
    let total = num1 + num2 + num3
    let avg = Math.round(total / 3)

    return avg
}
calc(1, 2, 3)// These results will not show anywhere. It is understood.

let avgMun = calc(153, 23042, 249)
console.log(`Average: ${avgMun}`)



/*
CHALLENGE

- Write a function that accepts name and grade as parameters, and then

prints "NAME got a GRADE in social studies" to the console.

*/


function reportCard(name, grade) {
    console.log(`${name} got a ${grade} on their test.`)

}

reportCard("Tonya", "B")
reportCard("Rachel", "B-")/* Output: Tonya got a B on their test.
Rachel got a B- on their test./*

