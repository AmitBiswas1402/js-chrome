// Immediately Invoked Function Expression (IIFE)- Used to remove pollution of global scope to get clean code. As call it doesn't require to call it.

(function dassa(){  // named IIFE (function with name)
    // console.log('ghgygh');
})();  // by giving () no need to call it's immediately invoked

//;After IIFE use ; to end it
//(function)()<-execution call

((name)=>{ // Works with arrow functions
    console.log(`hgfghf ${name}`);
})('amit');