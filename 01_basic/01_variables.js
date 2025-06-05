const accountId = 14453
let accountEmail = "hi@eamil.com"
var accountPassword = "12345"
accountCity = "LHR"  

//  accountId = 2

accountEmail = "hi1@email.com"

accountPassword = "54321"
accountCity = "KR"
let accountState; 

console.log(accountId)
console.table(
    [
        accountEmail , accountId,accountPassword,accountCity,accountState
    ]
)


{
    // This is scope >>> These curle braces are scope.
    if (condition){
        // This is scope under curle braces
    }
}

/*
    !! Use let instead of var becuase of issue in block scope and functional scope.
*/