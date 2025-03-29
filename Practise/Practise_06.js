class Person{
    constructor(name,age,gf,CollegeName,city,relationshipStatus){
        this.name= name;
        this.age=age;
        this.girlfriend=gf;
        this.CollegeName=CollegeName;
        this.city=city;
        this.relation=relationshipStatus;
    }
    describe(){
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}.`);
    }
    status1(){
        console.log(`${this.name} status with ${this.girlfriend} is ${this.relation} `)
    }
    static compare(person1,person2){
        if(person1.age>person2.age){
            console.log(`${person1.name} is older than ${person2.name}`);
        }else{
            console.log(`${person2.name} is older than ${person1.name}`);
        }
    }
}

let Ayush= new Person("Yo",21,"Kavya","TCET","Meera Road","BFF");
let Dashrath= new Person("Dashrath",20,"Kavya","TCET","Bhiwandi","BF");



Person.compare(yo,Dashrath);

let person1 = {
    name: "yo",
    age:21,
    city: "Meera Road"
}
let person2 = {
    name: "Dashrath",
    age:20,
    city: "Bhiwandi"
}

// function status(person1,person2){
//     if(person1.relation == "Single"  person2.relation == "Single"){
//         console.log(`${person1.name} and ${person2.name} are both single`);
//     }else{
//         console.log(`${person1.name} and ${person2.name} are both not single`);
//     }
// }

// && - and operator
// || -> or operator
// !-> Not operator
// ?-> ternary operator


function status1(person1,person2){
   person1.relation=="BF" && person2.relation=="BF" ? console.log("They are in a relationship"): console.log("They are not in a relationship")
}

status1(yo,Dashrath);