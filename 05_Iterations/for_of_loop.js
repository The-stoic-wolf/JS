// These loops are array specific

// ["",  "", ""]
// [{}, {}, {}]

// for of

/* 
======================= Syntax of for_of ==================================================

🔄 for...of — used for values of iterable things 📦
    >>> Loops over the values of iterable objects like arrays, strings, maps, sets.

Does not work with plain objects unless you make them iterable.


// Use for >>> map and other 
for (const element(i) of object(which want to iterate )) {
    // there is no need to add increment operator
}


const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if(greet == " "){
        console.log("There is an empty space.")
        break;
    }
    console.log(`Each character is ${greet}`)
}

*/


// ========================= Maps =======================================
// Map are same as Object but have unique value (key:value) AND 
// display in same order

const map = new Map() 
map.set('PK', "Pakistan")
map.set("UK", "United Kingdom")
map.set("AR", "Arizona")

//console.log(map);

for (const [i,value] of map) {
   console.log(i,":- ", value)
}
/*
const myObject = {
    game1 : "NFS",
    game2: "tekken"
}

for (const [key,value] of myObject) {
     console.log(key,":- ", value) // not working because object is not iteratable

}
*/