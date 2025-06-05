/*
=================================== switch syntax =======================================
switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

// ========================== switch with number case==========================================
/*
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;

    case 2:
        console.log("Feb");
        break;

    case 3:
        console.log("Mar");
        break;
    
    case 4:
        console.log("Apr");
        break;
    
    default:
        console.log("Executed")
        break;
}
*/
// ========================== switch with other case==========================================


const month = "Mar";
switch (month) {
    case "Jan":
        console.log("1");
        break;

    case "Feb":
        console.log("2");
        break;

    case "Mar":
        console.log("3");
        break;
    
    case "Apr":
        console.log("4");
        break;
    
    default:
        console.log("Executed")
        break;
}
