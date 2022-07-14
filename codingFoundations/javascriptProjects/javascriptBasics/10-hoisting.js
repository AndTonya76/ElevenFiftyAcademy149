//*HOISTING - The process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared. STORING A VARIABLE IN MEMORY SO IT CAN BE REFERENCED OR USED THROUGHOUT THE PROGRAM.
//TWO PHASES: 
    //1. CREATION PHASE - any variables (var, const, let) OR functions from code being stored in memory.
    //2. ExECUTION PHASE - any variables being assigned to the variable/ function that were stored in memory creation phase.
//    (create)  (execute)
//    let variable = value (let variable is the creation value) = value (is the result)//

let num = 18
console.log(num)


function sayHi() {
    console.log("Hello");

    let hi = "Heeeey!"
    console.log(hi); /
}

// FUNCTION EXPRESSION
let varFunc = funtion () {
    console.log("fart")
}
varFunc()