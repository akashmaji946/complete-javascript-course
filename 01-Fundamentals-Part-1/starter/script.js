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

/*
Assignment: 
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console
*/
country = "India"
continent = "Asia"
population = 1.2 * 1000000000 //1.2 Billion
console.log(country, "which is in", continent, "has a population of", population, "people" );

// Data Types in JS
// There can be only two kinds of things in JS: Primitive & Object types

// Primitive Types
// ==================================IMP====================================
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
