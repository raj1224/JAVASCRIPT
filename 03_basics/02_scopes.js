//var c = 300 // global variable
// var doesnot works as block scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// global scope terminal or browser console me alg alg hota h
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // closure :- closure is a function that remembers its outer variables and can access them
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // this is called hoisting

function addone(num){
    return num + 1
}



addTwo(5) // this will give error because function expression is not hoisted
const addTwo = function(num){
    return num + 2
}
