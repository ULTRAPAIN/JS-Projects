const readlineSync = require("readline-sync");


// 1) write a program to greet a person give their first and last name ?

let firstName = readlineSync.question("Enter your first name: ");
let lastName = readlineSync.question("Enter your last name: ");

console.log("Hello "+firstName+" "+lastName);

// 2) write a program that greets a person based on their gender? (If else)

let gender = readlineSync.question("Enter your gender: ");

if(gender=="male" || gender =="Male"  || gender=="M"){
    console.log("Hello Mr. "+firstName+" "+lastName);
}
else if(gender=="female" || gender =="Female"  || gender=="F"){
    console.log("Hello Mrs. "+firstName+" "+lastName);
}
else{
    console.log("Invalid gender");
}

// 3) Write a program that counts from 0 -1000 and prints for loop
let answer = 0;
for(let i=0;i<=1000;i++){
    answer+=i;
}
console.log(answer);

// 4) Write a program that prints all the even numbers in an array

let Array = [1,2,3,4,5,6,7,8,9,10];
let evenArray = [];
for(let i=0; i<Array.length;i++){
    if(Array[i]%2==0){
        evenArray.push(Array[i]);
    }
}
console.log(evenArray);
//5) write a program to print the biggest number in an array

let max=Array[0];
for(let i=0;i<Array.length;i++){
    if(Array[i]>max){
        max=Array[i];
    }
}
console.log(max);


//6) write a program that prints all the male people's first name given a complex object 

let people =[{
    name:"Dashrath",
    gender:"male"
},
{
    name:"Raj",
    gender:"male"
},
{
    name:"Sita",
    gender:"female"
},
]
for(let i=0;i<people.length;i++){
    if(people[i].gender=="male"){
        console.log(people[i].name);
    }
}

//7) write a program that reverse all the elements of an array 
let i=Array.length-1;
let reverseArray=[];
while(i>=0){
    reverseArray.push(Array[i]);
    i--;
}
  console.log(reverseArray);

