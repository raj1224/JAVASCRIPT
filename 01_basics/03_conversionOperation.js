let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //output: number
//console.log(valueInNumber); // output: NaN


// null => 0
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // output: true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // output: "33"
// console.log(typeof stringNumber); // output: string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // output: -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // output: "hello hitesh"

// console.log("1" + 2); //output: "12"
// console.log(1 + "2"); // output: "12"
// console.log("1" + 2 + 2); // output: "122"
// console.log(1 + 2 + "2"); // output: "32"

// console.log( (3 + 4) * 5 % 3); // output: 2

// console.log(+true); //output: 1
// console.log(+false); //output: 0
// console.log(+""); // output: 0
// console.log(+"hitesh"); // output: NaN

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// HOMEWORK: read prefix and postfix increment and decrement operators
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion