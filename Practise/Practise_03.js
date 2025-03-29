// 1) write a program that sets a counter that counts from 30 sec to 0 sec 

// In this program we will use the setInteval function to set a counter that counts from 30 sec to 0 sec 

let counter = 0;

const intervalID=setInterval(() => {
    console.log(counter);
    counter--;
    if(counter<0){
        clearInterval(intervalID);
    }
}, 1000);


//setTimeout function is used if we want to execute a function after a certain time but only once.

//setInterval function is used if we want to execute a function after a certain time but repeatedly.



// 2)calculate the time it takes between a settimeout call and the inner function actual running 
const startTime = Date.now();
console.log(startTime);

setTimeout(()=>{
    const endTime = Date.now();
    console.log(endTime);
    let timeTaken = endTime - startTime;
    console.log(`Time taken: ${timeTaken}ms`);
},0)

// 3) write a program that prints the HH:MM:SS in the terminal 

const date =new Date();
const hours = date.getHours();
const minutes= date.getMinutes();
const seconds=date.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);
