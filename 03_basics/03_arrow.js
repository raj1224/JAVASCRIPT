const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this refers to the object user
        console.log(this); // outpurt: { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // output: sam , welcome to website

// console.log(this); //  returns empty object in node console, in browser it returns global object -> window
 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // output: undefined, because this refers to global object and there is no username property in global object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // output: {}, because arrow functions do not have their own this, they inherit it from the parent scope
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) 
// {}=> retrun likhna padta h
// ()=> return likhna nahi padta h

// const addTwo = (num1, num2) => {username: "hitesh"} // output: undefined, because the function body is not wrapped in parentheses, so it is treated as a block of code and not an object literal
// to return an object literal, we need to wrap it in parentheses
const addTwo = (num1, num2) => ({username: "hitesh"}) // output: { username: 'hitesh' }, because we need to wrap the object in parentheses to avoid confusion with function body


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()