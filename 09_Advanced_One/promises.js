/*
let promiseOne = new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log('Asyn task is completed')
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("promise Consumed")
})



// another method > without storing in variable

new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function() {
    console.log("Asyn 2 resolve")
})
    


const promisethree = new Promise(function (resolve,reject) {
    setTimeout( function() {
        resolve({username: "chai", email: "new@email.com"})
    },2000)
})

promisethree.then( function(user) {
    console.log(user)
})


const promiseFour = new Promise( function(resolve,reject) {
    setTimeout( function() {
        let error = false;
        if(!error){
            resolve({username: "hitesh", password:"123"})
        } else {
            reject("Error: something Went Wrong")
        }
    },1000)
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then(function(username) {
    console.log(username)
}).catch( (error) => {
    console.log(error)
}).finally( () => console.log('finally Done'))

*/

const promisefive = new Promise((resolve,reject) => {
        setTimeout( function() {
        let error = true;
        if(!error){
            resolve({username: "JS", password:"123"})
        } else {
            reject("Error: JS Went Wrong")
        }
    },1000)

})

async function consumePromiseFive() {
    const response = await promisefive
    console.log(response);
}

consumePromiseFive()