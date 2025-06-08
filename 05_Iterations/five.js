const coding = ["js", "ruby", "CPP", "py", "java"]
/*
coding.forEach( function (val) {
 console.log(val)
})


coding.forEach((item ,index, arr) => {
    console.log(item, index, arr)
})
*/

let myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js" 
    },

        {
        languageName: "Python",
        languageFileName: "py" 
    },
        {
        languageName: "C++",
        languageFileName: "cpp" 
    },
]

myCoding.forEach( (item) => {
    console.log(item())
})