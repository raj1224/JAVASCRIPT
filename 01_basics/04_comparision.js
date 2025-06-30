// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //output: true
// console.log("02" > 1); //output: true
// console.log("2" < 1); //output: false

console.log(null > 0); //output: false
console.log(null == 0); //output: false
console.log(null >= 0); //output: true

// REASON:the reason is that an equality check(==) and comparison check(>,<,>=,<=) work differently.
// comparison converts null to a number,which is 0,thats why null >= 0 is true and null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict equality operator

console.log("2" === 2);