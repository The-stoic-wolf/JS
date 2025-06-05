const userEmail = ""
/*
if(userEmail) {
    console.log("Got user email.")
}else {
    console.log("Don't have user email.")
}
//=================================================================================


❌ List of Falsy Values (only these 6!)

|Value  	| Type	    | Example                   
|___________|___________|___________________________|
|false	    | Boolean	| if (false)                |
|0	        | Number	| if (0)                    |
|-0	        | Number	| if (-0)                   |
|""	        | String	| empty string → if ("")    |
|null	    | Object	| if (null)                 |
|undefined	| Undefined	| if (undefined)            |
|NaN	    | Number	| if (NaN)                  |
|___________|___________|___________________________|
All of these behave like false in condition checks. 
===================================================================
✅ Everything Else is Truthy

Some common truthy values:
                    true

                    non-zero numbers: 5, -3, 100

                    non-empty strings: "hello", "0", "false"

                    arrays: []

                    objects: {}

                    functions: function(){}

                    even " " (a string with just a space) is truthy!



*/
if(userEmail.length === 0 ){
    console.log("Array is Empty.")
}

/*
if(Object.keys(emptyObject).length === 0){
    //console.log(`Object is empty`)
}
*/
//========================================================================================
/*
    Nullish Coalescing Operator (??):
                                    null undefined (Only null/undefined)
                                
                                The ?? operator returns the right-hand value 
                                only if the left-hand value is null or undefined.


                        >>>     let result = value1 ?? value2;

>>> If value1 is not null or undefined, result = value1

>>> If value1 is null or undefined, result = value2



    */
let var1;
//var1 = 5 ?? 10;

//var1 = null ?? 10;
var1 = null ?? 5 ?? 10;
console.log(var1)

//====================================================================

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log('Less than 80'): console.log("More than 80")
