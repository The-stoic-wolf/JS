const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.map((num) => num + 10 ) //
// Chaning Method //>> use two or three methods at same time

const newNum = myNum
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNum)