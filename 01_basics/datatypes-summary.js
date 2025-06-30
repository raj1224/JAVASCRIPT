//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// is js a dynamic language? // Yes, it is a dynamic language 
// because it allows you to change the type of a variable at runtime.

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined, means variable is declared but not assigned any value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// typeof 



// Reference (Non primitive)

// Array, Objects, Functions
// typeof reference types will always return "object"

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ 
    console.log("Hello world");
}

// how to check the type of a variable?
console.log(typeof anotherId);
console.log(typeof bigNumber);

// obj => object
// array => object
// function => function
// typeof null => object (this is a bug in JavaScript, null is not an object)
// typeof undefined => undefined

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(non-primitive)

let ytname= "hitesh-choudhary"
let ytname2 = ytname
ytname2 = "hitesh-choudhary-2"
console.log(ytname); // hitesh-choudhary
console.log(ytname2); // hitesh-choudhary-2
// this is because primitive types are stored in stack memory


let heros2 = ["shaktiman", "naagraj", "doga"];
let heros3 = heros2
heros3.push("spiderman")
console.log(heros2); // ["shaktiman", "naagraj", "doga", "spiderman"]
console.log(heros3); // ["shaktiman", "naagraj", "doga", "spiderman"]
// this is because non-primitive types are stored in heap memory
// and the variable holds a reference to the memory location where the object is stored.
// so when we change the value of heros3, it also changes the value of heros2
// to avoid this, we can use the spread operator or Object.assign()