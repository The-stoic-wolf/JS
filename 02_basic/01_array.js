// array

const myArr = [0,1,2,3,4,5] //array in js also have different type of data types
// array is an object

// console.log(myArr[0]);

// Shallow Copies (Use same refernce point, means variable should be changed )
// Deep Copies (Do not use same refernce point, means variable shouldn't be changed )


const myHeros = ["ironman", 'Batman', "superman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[2]) ;

// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

myArr.pop() // remove last value in array

// myArr.unshift(9) // enter value to 1st in array

myArr.shift() 

// console.log(myArr);

// console.log(myArr.includes(3)); // provide element is present OR Not ==>> Output >> true / false

const newArr = myArr.join() // convert value to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice and splice


console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);


const myn2 = myArr.splice(1,3) // it remove elements from m index 1 to 3 and print only index[0ls]
console.log("C",myArr);
console.log(myn2);


