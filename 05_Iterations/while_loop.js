// while loop
/*
(initialization)
while (condition) {
    (print msg)
    (increment / decrement)    
}
*/

let index = 0;
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2;
}

// ===================================== array ===================================================

let myArray = ["flash", "batman", "superman"]

let arr = 0 ;

while(arr < myArray.length){
    //console.log(`Value of array: ${myArray[arr]}`);
    arr = arr + 1; // code must be easy to read
}

// ============================ do - while loop =======================================
// it print 1st and then check condition
let score = 11; // initialize

do{
    console.log(`Score is ${score}`);
    score  = score + 1; // increment / decrement
     
}  while(score <= 10)
// while(condition)

