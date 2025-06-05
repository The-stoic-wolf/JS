const marvel_heros = ['thor', 'ironman', 'spiderman'];

const dc_heros =['superman', 'batman']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // this add dc_heros as single element
// Output >> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman' ] ]

//console.log(marvel_heros[3][1]); // display index[3] element nested element at index[1]

// const new_hero = marvel_heros.concat(dc_heros)
// console.log(new_hero);

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another = [1,2,3,[4,5,6],7, [6,7,[4,5]]]
console.log(another.flat(Infinity)) // >>> ALL value spread out at same array


// console.log(Array.isArray("Hello")) // >>> to check this is array OR not
// console.log(Array.from("Hello")) // >>> convert value to array
// 
// 
// console.log(Array.from({name: "Hello"})) // >>> intertesting case

let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3)) // >>> return new array from set of elements

