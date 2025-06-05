// Object.create()

const car = {
    color: 'black',
    model: 'BMW'
}

const New = Object.create(car)

New.model = 'Bugati' ;
New.color = "Blue";
New.time = 25;
console.log(New.model)
console.log(New.color)
console.log(New.time)