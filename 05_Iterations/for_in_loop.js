// ======================== for_in_loop =========================================
// Use for >>> array and objects
/*

🧩 for...in — used for object keys 🗂️
>>> Loops over the keys (property names) of an object or array.
>>> Works best with objects.



*/
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

// for-in loop for object test

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}.`)
}

// use for-in loop for array
const myArray = ["cpp", "js", "rbuy", "py"]
for (const key in myArray) {
   console.log(`This is key: ${key} and this is value: ${myArray[key]}.`)
}