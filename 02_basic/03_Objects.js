// Sigleton

// Object.create //>>> also use to create an object


const mySym = Symbol("Key1") // Symbol Declare

// Object Literals

const JsUser = {
    name: 'Hello', 
    "Fullname": "HI", //>>> this value can't access by .dot 
    //mySym : "myKey1", //>>> data type show as string not as symbol
    [mySym]: "myKey1", //>>
    age: 18,
    location: 'KR',
    email: 'Hi@email.com',
    isLoggedIn : false,
    lastLoggesIn : ["Monday", "Friday"]

}

// console.log(JsUser.email)
// console.log(JsUSer[email]) //>> Wrong

// console.log(JsUSer["email"]) //>>> correct >>> use as string
// console.log(JsUSer["Fullname"])



// console.log(JsUser[mySym]) //>>> to access as symbol

// console.log(typeof JsUser.mySym) //>>> Use as string

JsUser.email = "Heloo@email.com" //>>> To change value
// Object.freeze(JsUser) //>>> to freeze object (mean to not change value)

// console.log(JsUser)

// Functions

/*
JsUser.greetings = function(){
    console.log("HEllo Js user")
}

console.log(JsUser.greetings);
*/


JsUser.greetings2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}

//console.log(JsUser.greetings());
console.log(JsUser.greetings2());