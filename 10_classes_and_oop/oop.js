const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //{} // 'this' refers to the global object in non-strict mode, or undefined in strict mode

// Constructor function to create User objects
// Note: Constructor functions are named with a capital letter by convention
// and should be called with the 'new' keyword.
// 'this' inside a constructor function refers to the new object being created
// and it is returned implicitly at the end of the function.
// If you want to return a different object, you can explicitly return it.
// If you return a primitive value, it will be ignored and the new object will be returned
// If you want to return a different object, you can explicitly return it.
// If you want to return a primitive value, it will be ignored and the new object will be returned
// If you want to return a different object, you can explicitly return it.
// If you want to return a primitive value, it will be ignored and the new object will be returned
// If you want to return a different object, you can explicitly return it.

// const promiseone = new Promise() // new is constructing a new Promise object 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // If you want to return a different object, you can explicitly return it.
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) // new keyword helps to override the default 'this' value
console.log(userOne.constructor);
console.log(userTwo);