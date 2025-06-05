const user = {
    userName:"hitesh",
    price:  999,
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`); //>>> THIS >> is use to 
                                                             // refer current context(value). 
                                                             // means to acces value in scope
        
        // console.log(this) // Output >>> display all value of object
    }
}

//user.welcomeMessage()
//user.userName = "Sam" // value change which is defined under scope
//user.welcomeMessage()

// console.log(this) // >>> Output>>> display is empty
//====================================================================================================
//function chai (){
//    let username = "helloe"
//    console.log(this.username) // Output >>> is undefined >>>because it work only in objects
//}
// chai()

// ================================USe arrow function (=>) =============================

// same as function but it's short type

const chai = () => { //arow function
    let username = "Helo";
    console.log(this.username) // Output >>> undefined
}

// chai()

// THIS >>> is global object ==================================================

// =============================== arrrow function ===================================

// myArray.forEach(() => () ) // also correct
// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;
// }
// console.log(addTwo(3,4))

// ========================= another way to use =================================

// const addTwo = (num1 , num2) =>  (num1 + num2) ; // under {} use return keyword otherwise not

// ============================== to return oobject ======================================

//const addTwo = (num1 , num2) => {username:"hitesh"}; //>>Output>> undefined due to absence of {}

const addTwo = (num1 , num2) => ( {username:"hitesh"}); // to return object use paraenthesis
console.log(addTwo(3,4))


const myArray = [2,3,4,5];
// myArray.forEach(function () {}) //correct 
