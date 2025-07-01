// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// why we use IIFE?
// to avoid polluting the global scope, to create a private scope, to execute code immediately
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

