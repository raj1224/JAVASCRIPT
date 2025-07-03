const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The first argument is the accumulator, which accumulates the callback's return values; the second argument is the current value being processed in the array.
// The second argument to reduce is the initial value
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal); // output: 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // output: 24996