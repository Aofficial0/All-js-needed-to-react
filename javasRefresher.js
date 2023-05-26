/*  1-  LET & CONST  */
/* let and const are diffrent way of creating variables  */
/* let is the new var we use it for variable values  */
/* we use const if we plan on creating a constant value, so something which you only assign once and never chnage ( and that is the case more often ) */

/* examples */
/* if i use var to show console.log myName it will print both of the values */

var myName = "Ahmed"; /* console will print  'Ahmed' */
console.log(myName);

myName = "max"; /* console will print  'max' */
console.log(myName);

/* if i used Let i get the same results as using Var */

let myName = "Ahmed"; /* console will print  'Ahmed' */
console.log(myName);

myName = "max"; /* console will print  'max' */
console.log(myName);

/* but when using const i only get the first value printed the seconed value will throw and an error because you can only assign one value per const */

const myName = "Ahmed"; /* console will print  'Ahmed' */
console.log(myName);

myName = "max"; /* console will print  'TypeError' */
console.log(myName);

/*  2-  Arrow Function  */
/*  arrow function is a different syntax for creating javascript functions */

/*  example of normal function  */

function myFnc() {}

////////////////////

function printMyName(name) {
  console.log(name);
}

printMyName("Ahmed"); /* console will print  'Ahmed' */

/*  example of an arrow function  */

const myFnc = () => {};

/*  here i am storing it in a constant and then on the right side of the equals sign that the arrow function syntaxt.
a list of arguments here it's none but it could hold some arguments and then an arrow. an equal sign and a greater than sign and then the function body. */

////////////////////

const printMyName = (name) => {
  console.log(name);
};

printMyName("Ahmed"); /* console will print  'Ahmed' */

////////////////////OR for functions with no arguments ////////////////////

const printMyName = () => {
  console.log("Ahmed");
};

printMyName(); /* console will print  'Ahmed' */

//////////////////// another example but using return not console.log with in the body itself  ////////////////////

const multiply = (number) => {
  return number * 2;
};

console.log(multiply(2)); /* console will print  4 */

/*  3-  Exports & Imports  */
/*  So javascript code you split up over multiple files. we just have to import them in the correct order in our html files.
And the idea behind export and import statments and so-called modules is that inside of a javascript file we can import content from another file so that the javascript files 
themselves know their dependencies */

/* example:- in a file called person.js we have a constant person which os stored as javascript object */

const person = {
  name: "Ahmed",
};

export default person;

/* the default keyword is a special keyword marking this as the default export of this file. we can import this somewhere else  */
/* maybe in another file we want to export multiple things example i have a utility.js file and want to export const clean and const baseData  */

export const clean = () => {};
export const baseData = 10;

/* we want to import form both these file to a third will in this example will be in  app.js 
 here are a couple of different import syntaxes. */

import person from "./person.js"; /* this import based on having the export using the default keyword */

import { baseData } from "./utility.js"; /* this import based on having the export using cosnt in exporting  */

import { clean } from "./utility.js"; /* this import based on having the export using cosnt in exporting  */

//////////////////// another example for importing few exports togther we can use the following  ////////////////////

import * as bundled from "./utility.js";

/*  4-  Classes  */
/* Classes are essentially blueprints for our javascript objects.*/
/* a class is created with the class keyword and can have both properties and methods */
/* Methods are simply functions attached to classes where properties are variables attached to classes. */
/* classes are kind of a more convenient way of creating constructor functions  */


/* properties ES6  */
constructor () {
  this.myPoperty = 'value'
}

/* properties ES7 */

myPoperty = 'value'

/* Methods ES6  */
myMethod(){

}

/* Methods ES7  */

myMethod = () => {}

/* eample ES6 */

class Person {
  constructor() {
    this.name = "Ahmed";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); /* console will print  'Ahmed' */

/* classes can also inherit */
/* to the inherit the human class into the person class we have to add the extends keyword to our person class and add the super special keyword method in the constructor.  */
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Ahmed";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); /* console will print  'Ahmed' */
person.printGender(); /* console will print  'male' */

/* example es7 */

class Human {
  gender = 'male';
 
 printGender = () => {
   console.log(this.gender);
 }
}

class Person extends Human{
  name = 'Ahmed';
 
 printMyName = () => {
   console.log(this.name);
 }
}

const person = new Person();
person.printMyName();
person.printGender();

/* classes are used bu react to create its components. this is one of the two ways for creating components.  */
 

/*  5- Spread & Rest Operators  (the three dots) ...    
it can be used for the spread or the rest but depends where we use it */

/* Spread: used to split up array elements or object properties  */
/* example */
const newArray = [...oldArray,1,2] /* for array */
const newObject = {...oldObject, newProp:5} /* for objects */

//////////////////////
const numbers = [1, 2, 3]; 
const newNumbers = [...numbers, 4]; 

console.log(newNumbers);  /* console will print  [1, 2, 3, 4] */

///////// object /////////////
const person = {
  name: 'Ahmed'
};

const newPerson = {
  ...person,
  age:27
}

console.log(newPerson);  /* console will print  [object Object] {
  age: 27,
  name: "Ahmed"
}*/


/* Rest: used to merge a list of function arguments into an array  */
/* example */
function sortArgs(...args) {
  return args.sort()
}

//////////////////////
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)) /* console will print  [1] */


/* 6- Destructuring */
/* means easily extract array elements or objects properties and store them in  variables */

/* array destructuring  */
[a,b] = ['Hello','Ahmed']
console.log(a) //Hello 
console.log(b) // Ahmed

/* object destructuring  */
{name} = {name:'Ahmed',age:28}
console.log(name) // Ahmed
console.log(age) // undefined

/* example  */
const numbers = [1, 2, 3];
[num1, num2] = numbers;

console.log(num1, num2); /* console will print  1 2  */

