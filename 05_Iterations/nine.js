// >>> .reduce Method

const myNums = [1,2,3]
/*
const myTotal = myNums.reduce(function (acc,curval) {
    console.log(`acc: ${acc} and curval: ${curval}.`)
    return acc + curval
}, 0)

*/

// ============== .reduce in ARROW function ==========================
const myTotal = myNums.reduce( (acc, curval) => acc+curval,0)

console.log(myTotal)


// ================= example in objects ============================


const shopingCart = [
    {
        itenName: "js course",
        price: 2999
    },

     {
        itenName: "py course",
        price: 5999
    },

     {
        itenName: "datascience course",
        price: 4999
    },

     {
        itenName: "mobile dev course",
        price: 12999
    }
]

const price = shopingCart.reduce( (acc, item ) => acc + item.price,0 )

console.log(price)



