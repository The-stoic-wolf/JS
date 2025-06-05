/*
const person = {
    firstName: "Jack",
    lastName: "Maa",
    id: 5656,
    age: 50,
    fullName: function(){
        return this.firstName +" " +this.lastName;
    }
};

// console.log(person.fullName())

const x = person ;

x.age = 5 ;

console.log(x.age)
*/
//====================================================
/*
const car = {
    color: 'black',
    height: 12 ,
    model :{
        car1: "BMW",
        car2: "Bugati",
    }
};

console.log(car.model.car1)
*/

// =================================================================
/*
const person = {
    Firstname: 'Jack',
    Lastname: 'Maa',
    age: 45,
}

const person2 = {Firstname:"jimmy", Lastname:'Jill'} ;

console.log(Object.assign(person, person2))

*/

// =================================================================

const car = {
    color: 'black',
    model: "BMW",
    back: "Flat",
}

const new_car = Object.assign({},car);

console.log(`This is color of new car ${new_car.color}.`)
console.log(`This is model of new car ${new_car.model}.`)