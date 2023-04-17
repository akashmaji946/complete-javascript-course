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




