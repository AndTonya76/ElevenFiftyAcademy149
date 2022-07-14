// OBJECTS
// Objects use multiple data types that consist of key/ value pairs.
// Objects are denoted by the { } curly brackets.

/*
    SYNTAX

    let objectVariableName = {
        key (property): value,
        key: value
        key: value
    }
*/

let Name= {
firstName: "Tonya",
lastName: "Anderson", 
firstNameLetters: 5
lastNameLetters: 8,
}


let Tonya = {
    firstName: "Tonya",
    lastName: "Anderson", 
    Age: 46,
    Title: "Administrative Assistant"
}

console.log(Tonya); //
console.log(Tonya.Name); //
console.log(Tonya.Age); //
console.log(Tonya.middleName); //undefined: middleName does not exist. This value was never provided.


console.log(Name);// OUTPUT: the object in it's entirety. {firstName: "Tonya"lastName: "Anderson"firstNameLetters: 5}

let netflix = {
    name: "Avatar the Last Airbender",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 10,
            episodeInfo: [
                {episode: 1, episodeName: "The boy in the iceberg"},
                {episode: 2, episodeName: "The Avatar Returns"},
            ],
        },
    },
},// You must add the comma's here

console.log("All data : ", netflix);// Output: netfilx object, all of the data from above.
console.log("Name of Netflix Series : ", netflix.name),// OUTPUT: Avatar the Last Airbender
// DOT NOTATION - allow us to step into our object and grab data.
console.log(
    "Season 1 of Avatar the Last Airbender", 
    netflix.seasonInfo.season1);// OUTPUT: Populated all of the season one info. Follow the relative path to get the info that we want in our object. (Like file folders are set up. Like outlines)


//put missing info here tonya

    //OUTPUT: The Avatar Returns

// ASSIGN NEW KEYS TO OBJECTS USING DOT NOTATION
// SYNTAX: objectVariableName.keyName.keyName.nameOfNewKey = value;
netflix.seasonInfo.totalSeasons = 3;
console.log(netflix.seasonInfo);// OUTPUT: totalSeasons: 3 - the newly added key

// ALL ARRAYS ARE OBJECTS
//
let bobsBurgersCharacters = ["Linda", "Louise", "Bob", "Tina" "Gene"],
// let bobsBurgersCharacters = {
//    0 : "Linda",
//    1 : "Louise",
//    2 : "Bob",
//    3 : "Tina",
//    4 : "Gene"       <<--- This is what is happending on the backend.
// }

// JSON - JaveScript Object Notation
/*
    JSON is used to send information from servers and clients and vice versa. JSON looks and acts like an object, but they are different. We can use dot notation and bracket notation to access the information within these "objects".

    NOTE: This is something for later. We will get to this once we get to APIs.
*/

let howIsMovingCastle = {
    wizards: {
        wizard1: "Howl",
        wizard2: "Markle",
        wizard3: "The Witch of the Waste",
    },
    humans: {
        human1: "Sophie",
        human2: "Lettie",
        human3: "Honey",
    },
};

// Object.keys() method - this method returns an array of an objects keys (property) names
console.log(Object.keys(howIsMovingCastle.wizards));// OUTPUT: wizard1, wizard2, wizard3
console.log(Object.keys(howIsMovingCastle.wizards.wizard3));// OUTPUT: all of the indices in the sting of Wizard3 '0', '1', '2', '3', '4', '5'...etc. because it is looking at the string as an array and arrays are objects.

// Object.values() method - this is a method that returns an array of the given object's values.
console.log(Objects.values(howIsMovingCastle.humans));//  OUTPUT: Sophie, Lettie, Honey
console.log(Objects.values.humans.human1);// OUTPUT: 'S', 'o', 'p', 'h', 'i', 'e' (separated and put into a string)