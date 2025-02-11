const readline = require ("readline-sync");
const prompt = require("prompt-sync")();
// Functions In javascript

// Functions are the block of code that can be reused.
// Functions are the block of code that can be called.

// In javascript we can define a function in 3 ways.

// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function



// Function Declaration

// function add(a,b){
//     return a+b;
// }

// console.log(add(1,2));


// Function Expression

// let divide = function(a,b){
//     return a/b;
// }

// console.log(divide(1,2));


// Arrow Function

// let subtract = (a,b) => a-b;

// console.log(subtract(1,2));

//call back function
//functions can take other functions as input and can return other functions as output.

function callArithmetic(a,b,operator){
    if(operator=="sum" || operator=="+"){
        return a+b;
    }
    else if(operator=="subtract" || operator=="-"){
        return a-b;
    }
    else if(operator=="multiply" || operator=="*"){
        return a*b;
    }
    else if(operator=="divide" || operator=="/"){
        return a/b;
    }
}

const value = callArithmetic(1,2,"sum");
console.log(value);

const value2 = callArithmetic(1,2,"subtract");
console.log(value2);

const value3 = callArithmetic(1,2,"multiply");
console.log(value3);

const value4= setTimeout(()=>{
    const value5 = callArithmetic(1,2,"divide");
    console.log(value5);
},2000);


 