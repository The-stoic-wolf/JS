/*
*** Primitive Data Types ==> 7 types

7 types ==> string, number, boolean, null(empty), 
            undefined (variable, memory space is declared but not value is declared),
            symbol (to create a value unique )
            BigInt (big scientific value)



*/
const score = 100 ; //number
const scoreValue = 100.3 // number
const isLoggedIn = false ; // boolean
const outSideTemp = null // Null ==> mostly Output is ==> Object
let userEmail; //  Undefined

const id = Symbol('123'); // Symbol (Use in React.js Most)
const anotherId = Symbol('123');
console.log(id == anotherId); 

const bigNumber = 3545225412n ;

/*
*** Non-Premitive / Refernce

3 Types ==> Array, Objects, Function

*** JS is Dynamically Typed Language
*/

const heros = ["ironman", "Caption America", "Huk"] // Array

let Object = {                  // This is Object
    name : "Jack",
    age: 22,
}

// Function

const myfunction = function (){  // Output is ==> function Object
    console.log("Hello")
}


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ----------------------------------------------------------------------------------

/*

Two Types of Memory ==> Stack and Heap

==> Stack Use Primitive Data Type
        ==> While Stack is use , Get a copy o variable

==> Heap Use Non-Primitive Data Type
        ==> While Heap is use, Get a Reference 


Think of your program as a desk with two drawers:

📦 Stack drawer: Small, fast, and organized

🗃️ Heap drawer: Big, messy, but flexible

----------------------------------------------------------------

🧱 Stack – "Fast and Simple"
Used for: Simple, short-term data (like numbers, small functions)

Works like: A pile of plates (Last In, First Out)

Memory is: Automatically managed


*/

let myYoutubeName = "Youtabe channel"
let anotherName = myYoutubeName
anotherName = "New name"
console.log(anotherName)
console.log(myYoutubeName)

