//SCOPE : heirarchy of variables in our code (access right for variables)
//GLOBAL SCOPE
//LOCAL SCOPE

let global = "Earth"

function scopeExample() {
    let local = "Indy"

    console.log(local)
    console.log(`I'm in ${local} which is a part of ${global}.`) // backticks `` are template strings - allows you to input variables inside the string to record a dynamic change within the variable.
}

