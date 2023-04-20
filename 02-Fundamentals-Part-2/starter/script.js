"use strict";
// we can use this mode for better error detection and correction
// has to be the first line in js file
// although we can have comments anywhere (above "use strict"; too)
console.log("Hello JS");
let hasDriversLicense = false;
const isEligible = true;

// if(isEligible) hasDriverLicense = true;  // Reference Error with strict mode on
// if(hasDriversLicense) console.log("Can drive cars");

if(isEligible) hasDriversLicense = true; 
if(hasDriversLicense) console.log("Can drive cars");

// "use strict"; also reserves future possible keywords
// strict mode reserved word (at script.js:16:7) with strictmode
// const private = "firm";  
// const interface = "ui";


// functions in js: basic building blocks in js
// a function is a code block that is written once used multiple times
// why use: modularity & ease of breakdown & separation of concerns
// prefer: descriptive and meaningful names a per use case
function logger(){
    console.log("hello akash");
}
// call / invoke
logger();
logger();

function sumOfNNumbers(n){
    console.log(n*(n+1)/2);
}
sumOfNNumbers(10);
sumOfNNumbers(1);
sumOfNNumbers(0);


// WAF to process fruits
function fruitsProcess(apples, oranges){
    console.log("You gave me", apples, "apples and", oranges, "oranges.");
    return `Making juice with ${apples} apples and ${oranges} oranges......`;
}

fruitsProcess(19, 10);
const juice1 = fruitsProcess(10, 7);
console.log(juice1);
console.log(fruitsProcess(6, 4));

// function declarations and expressions

//expn
const getAge1 = function (yearOfBirth){
    return 2023 - yearOfBirth;
}
//decln
function getAge2(yearOfBirth){
    return 2023 - yearOfBirth;
}

console.log(getAge1(1991));
console.log(getAge2(1995));

function dummy(){
    console.log("Hello I am Suraj");
}

dummy();
dummy();
dummy();
dummy();

// use of arrow functions since ES-6
const getAge3 = birthYear => 2023 - birthYear
console.log(getAge3(1999));

const yearsTillRetirement = (hisName, hisYOB) => {
    const age = 2023 - hisYOB;
    const yearsLeft = 65 - age;
    console.log(`Hi ${hisName}, you are ${yearsLeft} years away from your grand retirement :)`);
}

yearsTillRetirement("Akash", 1999);

//WAF to calculate SI
const si = (p, r, t) => (p * r * t)/100.0
console.log(si(1000, 10, 2));


// arrays in js
// arrays are used to hold different kinds of data itms / other structure

const friends = ["Raju", "Kaju", "Baju"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[friends.length - 1]);


console.log(friends.length);
console.log(friends);

// array elements  should be valid expressions not statements
const amounts = ["Akash", "Maji", 2023 - 1999, 8.20, friends]
console.log(amounts);


// git config --global user.email "akashmaji946@gmail.com"
// git config --global user.name "Akash Maji"


function findAge(yr){
    return 2023 - yr;
}
// changing arrays' elems
console.log(amounts);
amounts[2] = findAge(1990);
console.log(amounts);


// function calls are valid expressions
const ages = [findAge(1990), findAge(1991), findAge(1992), 
findAge(1994)];
console.log(ages);

// more on arrays
// ages = []; //gives error Uncaught TypeError: Assignment to constant variable.


// array methods in js
const myarr = ["hi", "this", "is", "a", "lovely", "place"]
console.log(myarr);

// push: add to end
// return the new length
myarr.push("wow");
console.log(myarr);

// unshift: add to front
// return the new length
myarr.unshift("hola");
console.log(myarr);

// shift: delete the first
// return the deleted
myarr.shift();
console.log(myarr);

//pop: delete the last
// return the popped
myarr.pop();
console.log(myarr);


// more array methods
const myarr2 = ["hi", "this", "is", "a", "lovely", "place"];
console.log(myarr2.length);
console.log(myarr2.includes("this"));

// tip calculator

const tipFinder = function(bill){
    if(bill < 100) return bill * 0.05;
    else if(bill >= 100 && bill <= 500) return bill * 0.10
    else return bill * 0.20
}

console.log(tipFinder(100));

let tips = []
let bills = [100, 10, 200, 500, 600, 0, 1000]

for(let i = 0; i < bills.length; i++){
    tips.push(tipFinder(bills[i]));
}
console.log(tips);


// objects is javascript

// what is an object?
// it is an important data structure that helps me
// maintain key value pairs

// it is very fundamental in js
// common way to define is using {}
 const obj = {
        firstname: "Akash",
        lastname: "Maji",
        age: 24,
        friends: ["mani", "sani", "bani"]
 }

 console.log(obj);

 // dot vs bracket notation
console.log(obj.lastname);
console.log(obj.firstname);
console.log(obj["age"])
console.log(obj["last" + "name"]);
console.log(obj[`${"first"}${"name"}`])

const prop = "first";
console.log(prop + "name");
console.log(obj[prop + "name"]);

// what happens if i try to access a property that does not exist
// well i get undefined

console.log(obj.twitter);
console.log(obj["gmail"]);

// adding more properties
obj.twitter = "user@twitter.com";
obj["gmail"] = "haha@gmail.com";
console.log(obj.twitter, obj.gmail);

// how to get output like this?
// Akash Maji has 3 friends, and his best friend is mani
function getInfo(obj){
    if(obj && obj.friends && obj.friends.length > 0){
        const str = `${obj.firstname} ${obj.lastname} has ${obj.friends.length} friends, \
and his best friend is ${obj.friends[0]}`;
        return str;
    }
    else{
        return "Not possible."
    }

}
console.log(getInfo(obj));







