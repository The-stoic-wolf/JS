//const tinderUser = new Object() //>>> sigleton Object

const tinderUser = {} //>>> Non Singleton Object

tinderUser.Id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false ;

// console.log(tinderUser)

const regularUser = {
    email: "sam@email.com",
    fullName: {
        userFullName: {
            firstName:"Sam ",
            lastName: "Wilson",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const Obj1 = {1:"a", 2:"b"}
const Obj2 = {3:"c", 4:"d"}
const Obj5 = {5:"e", 6:"f"}

// const Obj3 = {Obj1 , Obj2}
// const Obj4 = Object.assign({},Obj1,Obj2,Obj5)

const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
        {
        id:1,
        email:"h@gmail.com"
    },
        {
        id:1,
        email:"h@gmail.com"
    },
        {
        id:1,
        email:"h@gmail.com"
    },
        {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)) //>>>(Imp) use to get all keys of object
console.log(Object.values(tinderUser)) //>>> (Imp) use to get values
console.log(Object.entries(tinderUser)) //>>> provide all entries of object

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //>>> to check property exist
                                                    //>>> or not
