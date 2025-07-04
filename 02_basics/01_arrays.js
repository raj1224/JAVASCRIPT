// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
// arrays makes shallow copy of the data
// which means it does not copy the data but the reference to the data

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds element at the beginning
// myArr.shift() // removes element from the beginning

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts array to string

// console.log(myArr);
// console.log( newArr); 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice modifies the original array
console.log("C ", myArr);
console.log(myn2);
