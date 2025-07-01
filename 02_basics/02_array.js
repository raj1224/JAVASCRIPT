const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); //output: flash

// const allHeros = marvel_heros.concat(dc_heros) 
// concat does not modify the original array returns a new array
// console.log(allHeros); //output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// spread operator (preferred way)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); //output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")) //output: false
console.log(Array.from("Hitesh")) //output: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting
// output: [ 'name' ] - converts object keys to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //output: [ 100, 200, 300 ]