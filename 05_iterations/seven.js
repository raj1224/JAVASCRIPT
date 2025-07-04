const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) // output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// map is used to transform each element of an array

// chain map and filter
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums); // output: [41, 51, 61, 71, 81, 91, 101, 111, 121, 131]