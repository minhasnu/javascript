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
 *

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

//More operators
 x = x + 10;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);

*/
/************
 * CODING CHALLENGE
 */
/****
 * Compute mark and johns BMI and compare using a boolean variable
 *

 var wtJohn,wtMark,htJohn,htMark

 var bmiJohn,bmiMark;

 wtJohn = 55;
 wtMark = 65;
 htJohn = 1.75;
 htMark = 1.55;

 bmiJohn = wtJohn/(htJohn*htJohn);
 bmiMark = wtMark/(htMark*htMark);

 var johnHigher = bmiJohn > bmiMark;

 console.log(' bmi of John and mark is '+bmiJohn+'  '+bmiMark);
 console.log(' Is john\'s bmi bigger than mark\'s bmi? '+ johnHigher);
 */

 /******
  * If else statements
  *

  var name = 'John';
  var civilStatus = 'single';
/// ==== means equal value and equal type
  if (civilStatus === 'single') {
      console.log(name + ' is merrier');
  } else {
      console.log(name + ' is married ');
  }
*/

/*******
 * Boolean logic
 *
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20 ) {
    console.log(firstName + ' is a adolescent');
} else {
    console.log(firstName + ' is a man. ');
}
*/
/*****
 * Switch acting like and if else statement
 *
var age = 15;

switch(true) {
    case age < 13:
        console.log('is a boy');
        break;
    case age >= 13 && age < 20:
        console.log('is an teenager');
        break;
    default:
        console.log('John is a man');
}
*/


/*****************
 * The ternanry operator and switch statements
 *

 var firstName = 'John';
 var age = 16;

 age >= 18 ? console.log(firstName + " Drinks beer ") : console.log(firstName + " drinks juice ");
 var drink = age >= 18 ? 'beer' : 'juice';

 console.log(' drink for john ' + drink);

 //switch
/****
 * 
 * 
 *
 var job = 'instructor'

 switch(job) { 
    case 'teacher':
    case 'instructor':
        console.log('teaches kids');
        break;
    case 'police':
        console.log('enforces law');
        break;
    case 'programmer':
        console.log('writes code to solve problems');
        break;
    default:
        console.log('do not know what he does')
        
    
 }

 var name = 'Minhas';

 if(name || name === 0) {
    console.log('Variable is defined');
 }  else {
    console.log('Variable is not defined');
 }

 //Equality operators
var height = '23'
if (height === 23){
    console.log('same type and same value')
} else {
    console.log('not the same type')

}
*/

/**************
 * ARRAYS
 * 
 *

 var names = ['john', 'letty', 'arsi'];
 console.log(names);
 console.log( typeof(names) );
 console.log(names.length);

names[names.length] = 'Maria'

console.log(names)

//Different data types and methods in arrays

var names = ['minnu','mechu',25 ,26];
console.log(names);

names.push('hello');
console.log(names);
names.unshift('muhsin');
console.log(names);
names.pop()
names.shift();
console.log(names);

console.log(names.indexOf(25));

isMember = names.indexOf(25) === -1 ? 'is not present in the array' : 'is in the array';

console.log(isMember);

*/
/*****
 * Coding Challenge
 *
var bill, tip, totalBill;
bill = [124, 48, 268];
tip = [];
totalBill = [];

var percentage;

function tipCalculator(bill){
    switch(true){
        case bill < 50:
            percentage = 0.2;
            break;
        case bill >= 50 && bill < 200:
            percentage = 0.15;
            break;
        case bill > 200:
            percentage = 0.1;
            break;        
    }

    return bill*percentage;
}

tip = [
    tipCalculator(bill[0]),
    tipCalculator(bill[1]), 
    tipCalculator(bill[2])
 
];

finalValue = [
    tip[0]+bill[0],
    tip[1]+bill[1],
    tip[2]+bill[2],
];
console.log(tip+'  '+ finalValue);
*/
/**************
 * 
 * Objects and properties
 * 
 */

 //Object literal
 /***
  * 
  *
var john = {
    firstName :  'john',
    lastName : 'smith',
    birthYear : '1980',
    family : ['Jane', 'Mark', 'Mechu', 'muhsin' ],
    job : 'teacher',
    isMarried : false
};
console.log(john.lastName);
john.job =  'driver';
var x = 'birthYear'
john[x] = 1995;
console.log(john);
console.log(john['isMarried']);

// new Object syntax
var jane = new Object();
jane.firstName =  'jane';
jane.birthYear = '1996';
jane.isMarried = false;
console.log(jane)
*/
/*
var john = {
    firstName : 'john',
    birthYear : 1995,
    calcAge: function(){
        this.age =  2020 - this.birthYear;
    }
};
john.calcAge();
console.log(john);
*
var John = {
    height : 1.75,
    mass : 55,
    calcBmi : function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}
var Mark = {
    height : 1.8,
    mass : 70,
    calcBmi : function(){
        this.bmi = this.mass / this.height^2;
        return this.bmi;
    }
}
var x = John.calcBmi();
Mark.calcBmi();
console.log(John.bmi + ' ' + Mark.bmi);

var isJohnBmiHigher = John.bmi > Mark.bmi;

console.log('is John\'s bmi higer than mark\'s bmi  '+ isJohnBmiHigher);
console.log(x);
*/
/*****
 * Coding challenge
 *

var food = {
    bill : [100, 200, 25, 180, 42],
    tip : [],
    totalBill : [],
    calcTip : function(){
        for(i=0; i<this.bill.length; i++) {
            var percentage;
            switch(true){
                case this.bill[i] < 50:
                    percentage = 0.2;
                    break;
                case this.bill[i] >=50 && this.bill[i] < 200:
                    percentage = 0.15;
                    break;
                case this.bill[i] > 200:
                    percentage = 0.1;
                    
            }
            this.tip[i]=this.bill[i]*percentage;
            this.totalBill[i] = this.tip[i] + this.bill[i]
        }
   
        return this.tip
        
    },
    
}
console.log(food.bill);
food.calcTip();
console.log(food.tip);
console.log('Total bill array  : ' + food.totalBill);
*/

/******
 * continue and break
 *


var list = ['John','Wick',1989,'dog'];
console.log(list);
console.log('break statement');


for (var i = 0; i < list.length; i++) {
    if(typeof(list[i])!== 'string') break;

console.log(list[i])
}
console.log('continue statement');

for (var i = 0; i < list.length; i++) {
if(typeof(list[i])!== 'string') continue;

console.log(list[i])
}
*/

/********
 * Hoisting
 *
var year = 1990;
console.log(calcAge(year));

function calcAge(year){
    var age = 2020 - year;
    return age;

}
// console.log(retirement(1995));


var retirement = function calcRetirement(year){
    var age = 65 - (2020 - year);
    return age;
}
console.log(retirement(1995));
console.log(typeof(retirement));
console.log(typeof(calcAge));



console.log(six);
var six = 69;
console.log(six);
*/
/****
 * SCOPING of variables
 */

var a = 'HI ';
first();
function first(){
    var b = 'hello ';
    second();
        function second(){
            var c = 'bye ';
            console.log(a + b + c);
        }
}

first();
third();
function third(){
    var d = 'john';
    console.log(a+d);
}

// second();