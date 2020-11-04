/*
variables and datatypes 

console.log("Hello world!!!");
var firstName = "Minhas";
console.log(firstName);

var lastName = "naheem";
var age = 28;
var fullAge = true;

console.log(fullAge);

var job;
console.log("when value is not assingen it shows")
console.log(job);

job = 'programmer';
console.log(job);
*/

/*********************
 * variable mutation and type coercion
 

var name = "Nick";
var age = 28;
// Type coercion
console.log(name + " " + age);

var job, isMarried;
job = "teacher";
isMarried = true;
console.log(name + ' is a ' + job + ' and is '+ age + ' old. ');

//Variable mutation
age = 'twenty eight';
console.log(age);

alert(name + ' is a ' + job + ' and is '+ age + ' old. ');

var lastName = prompt('What is his last name? ');
console.log(name + ' ' +lastName);
*/

/*****************
 * Basic Operators
 *
ageJohn = 19;
ageNick = 28;
 var now = 2020

 var yearNick = now - ageNick;
 var yearjohn = now - ageNick;
 console.log('Birth yr of nick '+ yearNick);
 console.log('Birth yr of john '+ yearjohn);

 //Logical Operators

var johnOlder = ageJohn > ageNick;

console.log('is john older than nick' + johnOlder);

//typeof Operators
console.log('type of johnolder variable is ' + typeof johnOlder);

if (typeof hello == 'undefined'){
    console.log("check for undefined")
}
*/

/*************
 * Operator preceence
 */

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;
//Multiple operator
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

//Grouping
 var ageJohn = now - yearJohn;
 var ageNick = 25;

 avg = (ageJohn + ageNick) / 2;
 console.log(avg);

 //Multiple assignments
 //Assignment operator works from left to the right
 var x, y;
 x = y = (3 + 8) * 2 + 3;
console.log(x, y);