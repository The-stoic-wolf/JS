/*

if ( 2 == "2"){
    console.log("executed")
}
    
if ( 2 === "2"){
    console.log("executed")
}


// ======================================================================================
const temp = 41;

if(temp === 41){
    console.log("less than 50")
}
else (
    console.log("greater than 50")
)
console.log("Successfully Executed")

// ===================================================================================

const power = 100;
if(power < 100){
    var fly = "fly";
    console.log(`User Power: ${fly}`)
}
console.log(`user Power: ${power}`)

*/

// ================= implicit scope =================================================

// const balence = 1000

// if(balence > 500) console.log("Test")

// ====================================================================================

const balence = 1000
if(balence < 500){
    console.log(`Balence: ${balence} is less than 500`)
} else if(balence < 750){
     console.log(`Balence: ${balence} is less than 750`)
} else if(balence < 900){
     console.log(`Balence: ${balence} is less than 900`)
} else {
     console.log(`Balence: ${balence} is less than 1200`)
}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = true;
const LoggedInFromemail = true;

if(userLoggedIn && debitCard && 2==4){
    console.log("Allow to buy course.")
}

if(LoggedInFromGoogle || LoggedInFromemail){
    console.log("User logged in.")
}












// <, >, <=, >=, ==, ===(check both are same  with context and data_type)
//








