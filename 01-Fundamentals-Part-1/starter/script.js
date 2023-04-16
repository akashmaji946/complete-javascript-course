
// const keyword: used for defining constants
// logically const values should not change
// technically, stil if you  change that you get: TypeError(avoid that)
// must give initial value to const

// const birthday;  // no value assigned (error)
const myname = "Akash Maji";
let age = 24

// 3 types of variables: var(old school way, try to avoid it), let and const(from ES6 modern JS, prefer them)
// let: block scoped
// var: function scoped

// however below is fine(w/o var or let)
funnyVariable = true;
// above is not a variable, JS creates an attribute of global object

// printing to console(browser) using console.log()
console.log("Hello world, I am from script.js");
console.log(myname, "is awesome guy!");
console.log("He is", age, "years old.")

// variable naming convention
// use numbers, letters, dollar, underscore
// dont begin with number rest anything is ok
// try using camel case for variables, upcase for constants
let mystrange$variable = "hahahaha!"
console.log(mystrange$variable);

// we can use both ''   or "" for strings
// try using "" mostly
let ok_variable = 12;
ok_variable = "Hi";
console.log(ok_variable);
// snake_case convention is allowed but not preferred
// try using a variable just just storing one type of data,
// although JS can handle any type you throw to it

//Doing mathematical ops
// try using spaces around operators, numbers, variables
let y = 20;
y = y + 10 * 2 / 3 % 7 - 5;
console.log(y);


// Data Types in JS
// There can be only two kinds of things in JS: Primitive & Object types

// Primitive Types
// ====IMP====
// There are 7 primitive data types in JS
// Number:  represents floating point numbers (both integers and reals)
// String: represent sequence of chars (no character type)
// Boolean: logical data type (true, false)
// Undefined: value of a variable not yet defined(not allocated memory)
// Null: represents nothing(emptiness)
// In modern JS:
// BigInt: represents very large numbers beyond Number range for integers  ES2020
// Symbol: value that can't change   ES2015


// Dynamic typing: in js value has type not varianle

console.log(typeof undefined);
console.log(typeof null); //weirdly, object not null (a bug is js)
console.log(typeof 12);
console.log(typeof 12.3);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof 'hello');

// dynamic typing in action
// num is declared but not defined(so undefined)
let num;
console.log(typeof num);
num = 1991;
console.log(typeof num);
num = null;
console.log(typeof num);  //giving object not null


// Operators in JS =>
// concat strings using + opr
let fname = "Akash";
let lname = "Maji";
console.log(fname + lname); // "AkashMaji"
console.log(fname + " " + lname); //better to use string templates
// a power n is a**n
let a = 10;
let n = 3;
console.log(a ** n); //1000
// +=   -=   /=   *=   =    are assignment opr
let x = 100;
x += x;
x *= x;
x /= 2;
console.log(x);
// increment & decremet opr are allowed in JS
x = 1;
x++;
x--;
;   // null or empty string (OK)
console.log(x); // 1

// Precedence & Associativity of operators

// Order: ..ASRCBL..
// Grouping > Member Access > Arithmetic > Shift > Relational > Comparision > Bitwise > Logical > Assignment
// refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

let xs, ys; // decalare
xs = y = 29 - 9 + 10; // initialize
// Precedence: Arithmetic > Relational
let fun = xs - 10 > ys + 10
console.log(xs, ys, fun);

// Associativity: mostly LtoR
let z = 14;
z = z - 10 - 2; //LR
z = z ** 2 ** 3;  //RL

// string templates(a way of string interpolation)
// synatx:    `content goes here`
let akashName = "Akash Maji";
let akashAge = 24;
let akashSalary = 7.5;
let akashSingle = true;

// worst way: mind blows
// no need of \ to go to new line for string continuation (can use RETURN anywhere)
let longStr = "I am " + akashName + ". I am " + akashAge + " years old. I earn " + 
                akashSalary + " LPA. I am currently single is " + akashSingle; 

console.log(longStr);

// best way: every space counts here
// use \ to be able wo continue string in new line without inserting new line
longStr = `I'm ${akashName}. I am ${akashAge} years old. \
I earn ${akashSalary} LPA. \
I am cuuently single is ${akashSingle}`; 
console.log(longStr);

// string templates useed to write multiline strings w/o hassle

// works but avoid this(a bug in JS)
longStr = "This is a \t very \'bad\' (1000 times)\n\
difficult to write string\n\
I am \"not\" willing to 'write' it like this!";
console.log(longStr);

longStr = 'This is a \t very \'bad\' (1000 times)\n\
difficult to write string\n\
I am \"not\" willing to \'write\' it like this!';
console.log(longStr);

//prefer this
longStr = `This is a \t very good (1000 times)
way to write string
I am "very" willing to 'write' it like this!`;
console.log(longStr);


// console.log("You can do 😎");
// Conditional Execution: if/else control structure

let hisAge = 23;
let isEligible = hisAge >= 18;
if(isEligible){
    console.log("You are eligible to vote ✌");
}else{
    console.log("You are N0T eligible to vote 😒");
    console.log(`Please wait ${hisAge-18} more years`);
}

let yearOfBirth = 1999;
let bornInMillenium = yearOfBirth <= 2000
if(bornInMillenium){
    console.log("You are born in 2000 millenium! 😎");
}else{
    console.log("You are born in 21st century. 😁")
}

// type conversion is of two types:
// type casting: by us
// type corecion: by JS

// CASTING
console.log(Number("1234"));
console.log(Number("akash")); //NaN
console.log(typeof NaN);

console.log(String(12234));
console.log(String(12.89));
console.log(String(null));

// COERCION
let tricky = 10 + '1'; // "101"
console.log(tricky);
tricky = tricky - 100;
console.log(tricky);

tricky = "10" - "4" - "3" - 2 + "5";  //"15"
console.log(tricky);
console.log(tricky / 2);
console.log(tricky / "2");

console.log("I am " +  13 + " years old.");
console.log("I am very " + 13 + 2 + " kg weighted.");

// falsy values
// JS has these as falsy:   false   0  ""  NaN  null  undefined
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(" ")); //space
console.log(Boolean(Number("123"))); 
console.log(Boolean(String("")));
console.log(Boolean(Number("123Rummy")));


let marks;
if(marks){
    console.log("It has valid value :)");
}else{
    console.log("It has NO value :(")
}

marks = 0;
if(marks){
    console.log("It has valid value :)");
}else{
    console.log("It has NO value :(")
}

marks = "23";
if(marks){
    console.log("It has valid value :)");
}else{
    console.log("It has NO value :(")
}

marks = Number("23marks");
if(marks){
    console.log("It has valid value :)");
}else{
    console.log("It has NO value :(")
}

marks = null;
if(marks){
    console.log("It has valid value :)");
}else{
    console.log("It has NO value :(")
}

// type cconversion
age = 28;
if (age === 18){
    console.log("You just became 18 :)");
}else{
    console.log("You are either kid or old");
}


age = "18"
if(age == 18){
    console.log("You are 18 too")
}

// try using === wherever possible to avoid weird js bugs
const yob = prompt("What is your YOB?");
console.log(typeof yob);

if(yob <= 2000){
    console.log("u r kid");
} 

if(Number(yob) === 2000){
    console.log("2000 ka janma baccha");
}

let inp = prompt("Age:");
// age = Number(age)
if(age !== 18){   // true with "18"
    console.log("This is noy your first vote");
}

// boolean logic: and or not (   &&   ||    !  )
age = 19
let testScore = 99
let cond1 = age >= 18
let cond2 = testScore >= 90
if(cond1 && cond2){
    console.log("You are about to appear in interview");
}

// lets look at a problem
age = 19;
let eyesight = "good"
let someoneIsEligile = age >= 18
let someoneHasGoodVision = eyesight.toUpperCase() == "GOOD"
let someIsTired = false

if(someoneIsEligile && someoneHasGoodVision && !someIsTired){
    console.log("You can drive 🚗");
}else{
    console.log("You can't drive");
}


// ternary opr
age = 19
const drink = age >= 18 ? "wine🍷" : "water🥛";
console.log(drink);

// we can put this inside string templates
const str = `This is to certify that your age is ${age} and so\
 you should drink ${age>=18 ? "wine" : "water" }`;
console.log(str);

// statements and expressions in JS
// expressions result in some value
2 + 6 - 8 * 7;
"thus added to account no." + 12345;
// statements result in no value
const pataNhi = 2 + 4 - 7;

// switch case in JS
// break needed
const weekday = "wednesday";
switch(weekday){
    case "monday":
        console.log("Plan the week and prepare plan sheet");
        break;
    case "tuesday":
        console.log("refer the study material and learn youself");
    case "wednesday":
    case "thursday":
        console.log("Record the videos by urself");
    case "friday":
        console.log("refine your work and optimize");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy weekend");
        break;
    default:
        console.log("invalid day");
}






