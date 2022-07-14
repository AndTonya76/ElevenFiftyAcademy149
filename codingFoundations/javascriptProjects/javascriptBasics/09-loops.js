//LOOPS 
// Loops allow developers to repear a bit of code over and over.

/*
    FOR LOOPS - 3 different parameters 1. Inital Expression or Declaration 2. Condition 3. Increment Expression

    SYNTAX:
    for (initial expression, condition, increment expression) {
        NESTED LOGIC
    }
*/

let i = 9;//globally scoped variable

for (let i = 0; i <= 10; i++) {// i++ = 1+1 (increase by 1)
    console.log(i);//console log the variable
}//output: 1 2 3 4 5 6 7 8 9 10 and then stops because it is looking for the lop of numbers that include i but is less than 10, increasing by 1.

console.log("This is coming from line 18, i");// output is 9   // GO BACK TO THE LECTURE AND RE LISTEN TO THIS SHIT!

//for (i = 10; i >= 0; i==1) {
    //console.log("Oh hey there, Nelson")
//}



//FOR IN Loops - these loops are great for iterating over objects (enumberable (countable) properties).

let student = {
    name: "Michael",
    awesome: true,
    degree: "JavaScript",
    week: 3,
};

for (item in student) {
    console.log(item);

}// Output name awesome degree week



let student = {
    name: "Michael",
    awesome: true,
    degree: "JavaScript",
    week: 3,
};

for (item in student) {
    console.log(student[item]);
}// output: Michael  true  JavaScript  3



let catArray = [
    "tabby",
    "calico",
    "bengal",
    
]



//FOR OF - great for iterating over arrays. They will iterate over the values of an iterable object (array).


