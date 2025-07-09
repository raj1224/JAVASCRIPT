// WORDS & KEYWORDS IN JAVASCRIPT

// words are used to create variables, functions, etc.
// keywords are reserved words in JavaScript that have special meaning
// e.g. var, let, const, function, if, else, switch, case
// keywords cannot be used as variable names, function names, etc.
// e.g. var = 10; // this will throw an error

// ---------------------------------------------------------------------------------------

// VARIABLES IN JAVASCRIPT

// Variables are used to store data values
// In JavaScript, there are three ways to declare a variable: var, let, and const

// declaration and initialization of variables
let x; // declaration
x = 10; // initialization
// or you can do it in one line
let y = 20; // declaration and initialization in one line

var a =12; // window me add hota h
// function scoped hota h
// firse declare kr skte h same name se fir bhi error ni aaega.
var b =12;
var b=13; // no error: var is function scoped or globally scoped,
//  so you can redeclare it in the same scope

let a=12;
let a =15; // error: Identifier 'a' has already been declared
// let is block scoped, so you cannot redeclare it in the same scope

const discount = 15; // const is block scoped and cannot be reassigned
discount = 20; // error: Assignment to constant variable

// var is function scoped or globally scoped, 
// meaning it is accessible throughout the function or
//  globally if declared outside a function.
var globalVar = "I am global"; // can be accessed anywhere in the script
// checking the scope of var
window //in the browser, window is the global object
// or 
function abcd(){
    if(true){
        var a=12;
    }
}
console.log(a); // output: 12
// 12, var is function scoped, so it is accessible here

var name = "Yash"; // var is function scoped or globally scoped
let age = 25; // let is block scoped
const pi = 3.14; // const is block scoped and cannot be reassigned

// ------------------------------------------------------------------------------ 

// SCOPE (GLOBAL, FUNCTION, BLOCK)

// Scope refers to the visibility of variables in different parts of the code.
// There are three types of scope in JavaScript: global, function, and block scope.

// Global scope: Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the code.

// Function scope: Variables declared inside a function are in the function scope.
// They can only be accessed within that function.

// Block scope: Variables declared inside a block (e.g., inside curly braces {}) are in the block scope.
// They can only be accessed within that block.


var globalVar = "I am global"; // global scope

{
    let a =12; // block scope
    const b = 15; // block scope
    var c = 20; // function scoped or globally scoped
}

console.log(globalVar); // output: I am global
console.log(a); // error: a is not defined, as it is block scoped
console.log(b); // error: b is not defined, as it is block scoped
console.log(c); // output: 20, as c is function scoped or globally scoped

// ----------------------------------------------------------------

// REASSIGNMENT OF VARIABLES AND REDECLARATION

// Variables declared with var can be reassigned and redeclared.
var x = 10;
x = 20; // reassignment is allowed
var x = 30; // redeclaration is allowed 

// Variables declared with let can be reassigned but not redeclared in the same scope.
let y = 10;
y = 20; // reassignment is allowed
// let y = 30; // error: Identifier 'y' has already been declared, as let is block scoped

// Variables declared with const cannot be reassigned or redeclared.
const z = 10;
// z = 20; // error: Assignment to constant variable, as const cannot be reassigned
// const z = 30; // error: Identifier 'z' has already been declared


// ----------------------------------------------------------------

// TEMPORAL DEAD ZONE (TDZ)

// tdz utna area h jitne me js ko pta h variable exist krta h pr vo apko value ni de skta.
// area kitna hota h? 
// ans: variable ki declaration se lekar uski initialization tak ka area.

// Temporal Dead Zone (TDZ) is the time between the start of a block and the declaration of a variable.
// During this time, the variable is not accessible, and trying to access it will result in a ReferenceError.

{
    // console.log(a); // error: Cannot access 'a' before initialization, as a is in TDZ
    let a = 20; // a is now accessible within this block
    console.log(a); // output: 20, as this a is declared in the block scope
}

// Example of TDZ with var
// var is hoisted, 
// so it can be accessed before its declaration, but it will be undefined
console.log(a);



var a = 10; // this is fine, as var is hoisted
