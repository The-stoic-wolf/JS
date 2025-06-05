// Immediately Invoke Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`) //don't need variable polution from global scope
})();

//chai()

/*
(1st) (2nd)
(1st) >> define function
(2nd) >> executed call of function

🔒 Why use IIFE?

>>> Keep your variables private so they don’t mess up other parts of your code.
>>> Run some code right now and never again — like setting things up.
>>> Keep your stuff safe in a box, so it doesn’t mix with other people’s stuff.
*/


/*

============================== Named IIFE ==============================================
( function chaicode()  { 
    // console.log(`DB connected Two`)
}) () >>> error because sometimes immediately invoke function don't knew where to stop >>>
    >>>> SOlution add ; at end
*/

( function chaicode1()  {
    console.log(`DB connected Two`)
}) ();

// ========================= arrow function also use IIFE ==============================

( (name) => {
    console.log(`DB Connected Three: ${name}`)
} ) ("Jack"); // the problem is sometimes semi-colon(;)







