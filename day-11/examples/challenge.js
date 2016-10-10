/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: undefined


givenName = "Jess";
// Q: What is `givenName` set to right now?
// A: 'Jess'


givenName = givenName;
// Q: What is `givenName` set to right now?
// A: 'Jess'


var greeting = "Hello, how are you? " + givenName;
// Q: What is `greeting` set to?
// A: 'Hello, how are you? Jess'


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: 45


/* =========================================================
     Part 3: Expressions - You Write Code!
*/

// Create a variable to calculate Jess' age
// The answer should read "Jess is 33 years old"
// The answer should not be written in a comment.
var born = 1983;
var today = 2016;

// Answers Below:

var jessAge = today - born;
var statement = 'Jess is ' + jessAge + ' years old'

// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:

yourName = 0;
instructorName = 1;

yourName = 'Max';
instructorName = 'Jess';

// Final Statement
var statement = "My name is " yourName + ", and I am taking a class at The Iron Yard. My instructor's name is " + instructorName;
