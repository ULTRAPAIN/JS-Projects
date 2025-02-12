//Classes and object 

class Animal{
    constructor(name , legCount, speaks){
        this.name = name;
        this.legCount=legCount;
        this.speaks=speaks;
    }
    describe(){
        console.log(`${this.name} has ${this.legCount} legs and Speaks ${this.speaks}`);
    }
    static describeAllAnimals(){
        console.log("This is the Static function that can be called on the class itself");
}
}

let dog= new Animal("dog",4,"Bhow Bhow");//create a new instance of the Animal class or we can also call it as an object
let cat= new Animal("cat",4,"Meow Meow");

dog.describe(); //call function on object 
cat.describe();

//we can functions inside the class


//we can have static function in the class , that are associated with the class itself rather than any particular instance(object)

Animal.describeAllAnimals();

//objects can't call the static functions 

//Date is not a primitive , its an Class, that is predefined in javascript 


//we can also pass the date in the format of string 

let date2 = new Date("2024-01-01");
console.log(date2);

//we can also pass the date in the format of number 

let date3 = new Date(1000);
console.log(date3);

//we can also pass the date in the format of array 

let date4 = new Date([2024,0,1]);
console.log(date4);

//lets log the current date , month , year , hour , minute , second , millisecond 

let date= new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


//Json is a format for storing and transporting data 

let person = {
    name: "John",
    age: 20,
    city: "New York"
}   

// When we send the the dat to user we basically send the JSOn data in the format of strings 

let personString = JSON.stringify(person);

console.log(personString);

//When we receive the data from the user we basically receive the JSON data in the format of strings 

let personObject = JSON.parse(personString);

console.log(personObject);

//we can also convert the array to the JSON data in the format of strings 

let array = [1,2,3,4,5];

let arrayString = JSON.stringify(array);

console.log(arrayString);

//we can also convert the JSON data in the format of strings to the array 

let arrayObject = JSON.parse(arrayString);

console.log(arrayObject);


//Math is a predefined class in javascript 
console.log(Math.PI);

//we can also use the Math.random() function to generate a random number 

console.log(Math.random());     

//we can also use the Math.floor() function to round down the number 

console.log(Math.floor(4.7));

//we can also use the Math.ceil() function to round up the number 

console.log(Math.ceil(4.05));

//we can also use the Math.round() function to round the number 

console.log(Math.round(4.5));   

//we can also use the Math.abs() function to return the absolute value of a number 

console.log(Math.abs(-4.5));

//we can also use the Math.max() function to return the maximum value of a number 

console.log(Math.max(1,2,3,4,5));

//we can also use the Math.min() function to return the minimum value of a number 

console.log(Math.min(1,2,3,4,5));

//we can also use the Math.pow() function to return the power of a number 

console.log(Math.pow(2,3));


//we can also use the Math.sqrt() function to return the square root of a number 

console.log(Math.sqrt(16));

//we can also use the Math.cbrt() function to return the cube root of a number 

console.log(Math.cbrt(8));  



console.log(personObject["name"])

// How to get the keys of an object 
// using object global class with the static key method 

console.log(Object.keys(personObject));
//returns an array of the keys of the object 

// How to get the values of an object 
// using object global class with the static values method 

console.log(Object.values(personObject));
//returns an array of the values of the object 



// How to get the entries of an object 
// using object global class with the static entries method 

console.log(Object.entries(personObject));



//We can assign a new property to the object 

personObject.gender = "Male";

console.log(personObject);

//We can also delete a property from the object 

delete personObject.gender;

console.log(personObject);

//We can also check if a property exists in the object 

console.log(personObject.hasOwnProperty("name"));

//We can combine two object properties in to one object 

let person1 = {
    name: "John",
    age: 20,
    city: "New York"
}   

let person2 = {
    name: "Jane",
    age: 21,
    city: "Los Angeles"
}   

//using the assign static method 

let person4 = Object.assign(person1, person2);

console.log(person4);

//using the spread or rest operator 

let person5 = {...person1, ...person2};

console.log(person5);

