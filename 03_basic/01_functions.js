/*
function sayMyName() {
    console.log("HEllo");
}

// sayMyName //>>> This provide refernce of function
sayMyName() // call the function

        // function(parametr, parameter)
function addTwoNumbers(n1,n2){
    console.log(n1+n2)
}

function addTwoNumbers(n1,n2){
    let result = n1 + n2;
    return result;
}
*/


// addTwoNumbers(3,"a") // function(argument,argument)
// const result = addTwoNumbers(3,5)
//  console.log("result: ",result)

// console.log(addTwoNumbers(3,5))

/// function userLoginMsg(userName){
///     return `${userName} just logged In`
/// }
// userLoginMsg("Hello") //>>> function is returned but we didn't say to print


/*
function userLoginMsg(userName = "sam"){ //>>> add default value "sam"
    if(userName === undefined){
        console.log("Enter a username: ")
        return 
    };
    return `${userName} just logged In`
}
// userLoginMsg("Hello") //>>> function is returned but we didn't say to print
console.log(userLoginMsg())
// console.log(userLoginMsg("Hello"))
*/

// ============================================================================================
// situation where parameters are unknown
function calculateCartPrice(...num1) { // (...(3 dots only)) >>> this rest/spread operator
    return num1
}

// console.log(calculateCartPrice(2,4,5))

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`)
}

//console.log(handleObject(user))

handleObject ({
    username: "sam",
    price: 399
})

const  myArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))






