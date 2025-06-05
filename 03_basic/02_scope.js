if (true){
    let a = 10
    var b = 20 //>>> var alos use out of scope
    const c = 30

    // console.log("Inner: ",a)
    //>>> This local scope
}

// {} //\\>>> this is scope

// var c = 300 //>>> This is global scope

let a = 300

//console.log(a)
// console.log(b)
// console.log(c)

//=======================================================================

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website) //>>> this is not get access because it is outside of scope
    two()
}

//one()

if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

// ========================== Interesting ===================

console.log(addone(5))
function addone(num) {
    return num + 1
}

addTwo(5) //>>> this make error because function is store in variable and variable is
//declare afterthe function call

const addTwo = function(num){
    return num + 2
}
// ===================== Hosting ===========================================================
// JavaScript moves declarations (not values) to the top of their scope before the code runs.
// THe output is an error

