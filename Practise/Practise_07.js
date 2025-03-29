
const prompt = require('prompt-sync')();
//callback function is a function that is passed as an argument to another function

function square(x){
    return x*x;
}

function cube (x){
    return x*x*x;
}

function sumOfSomething(x,y,f1){
    let a=f1(x);
    let b=f1(y);
    return a+b;
}

let result= sumOfSomething(2,3,square);
console.log(result);

 result = sumOfSomething(2,3,cube);
console.log(result);


// Async Functions in Javascript 
/*As javascirpt is single threaded language, it can only do one thing at a time.
But we can use async functions to do multiple things at a time.
Async functions are non-blocking functions.
It can be used to perform long tasks without blocking the main thread.
It can be used to perform multiple tasks at a time.
It can be used to perform tasks in a sequence.
*/

/*There are three ways to create async functions in javascript
1. Callbacks
2. Promises
3. Async/Await
*/

/*
Callback Functions
Callback functions are functions that are passed as arguments to another function.
Callback functions are used to handle async operations in javascript.
*/

//Example 
function greet(name){
    console.log('Hello '+name);
}

function processUserInput(callback){
    let name =prompt('Please enter your name');
    callback(name);
}

processUserInput(greet);

/*2. Promises
Promises are used to handle async operations in javascript.
A promise is an object that may produce a single value some time in the future.
A promise is in one of the three states:
1. Pending: initial state, neither fulfilled nor rejected.
2. Fulfilled: meaning that the operation completed successfully.
3. Rejected: meaning that the operation failed.
*/

//Example 

let promise = new Promise(function (resolve,reject){
    let x=5;
    if(x==5){
        resolve('success');
    }
    else{
        reject('failure');
    }
})

promise.then(function(message){
    console.log('This is in the then block '+message);
})

promise.catch(function(message){
    console.log('This is in the catch block '+message);
}
)

/*3. Async/Await
Async/Await is a new way to write asynchronous code in javascript.
It is built on top of promises.
It makes the code look synchronous.
It makes the code look cleaner and more readable.
*/

//Example

function resolveAfterSeconds(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(x);
        },1000);
    });
}

async function f1(){
    let x= await resolveAfterSeconds(10);
    console.log(x);
}

console.log("Before calling Async Await");

// lets try to get the data from the api using async await
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
}

getData();

// so fetch is a function that is used to get the data from the api
// and response.json() is used to convert the response to json format.

// example 2
async function sendData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }
    });
    let data = await response.json();
    console.log(data);
}

// aync functions are been placed in the webApi's and then after they have been esended to the callbackQueuue.
// so that the main thread can be free and can do other things.
// so this is how the async functions are been used in the javascript.
