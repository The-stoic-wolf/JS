// de-structure Objects

const course ={
    courseName: "JS in hindi",
    price: "1000",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // extract a value from object
    //{value           :  keyword made by own }

console.log(instructor);


// This is JSON (in JSON everything is string)
/*
{
    "name":hitesh",
    "courseName": "JS in Hndi",
    "price": "free"
} // error because no name as object as

*/




