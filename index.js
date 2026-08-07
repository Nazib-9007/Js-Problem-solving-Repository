import {add} from './problemSolve.js';
console.log(add(5,5));

//If when arise this type of sitiution like need to change the name of function then us " as " property.....

import {add as sum} from './problemSolve.js';
console.log(sum(5,5));

//Import default and Named function...
import newNameFunction from './problemSolve.js';
console.log(newNameFunctoin());

//SO, that's the concept of import and export in javascript...

//Just practise DOM
function geeks(){
    const demo = document.getElementById('geeks');
    demo.style.color = 'green';
}

function geeksFor(){
    const x = document.getElementsByName('ga');
    alert('Total element with name ga are : '+ x.length);
}

const collection = document.getElementsByClassName('exampleColor');
collection[0].style.backgroundColor = 'green';
collection[0].style.padding = '10px';
collection[0].style.margin = '15px';

const tag = document.getElementsByTagName ('h3');
tag[0].innerHTML = 'After use Tag name method';

const parents = document.getElementById('div');
console.log(parents);

//before and after method..
const para = document.getElementById('p');
const div = document.createElement('div');
div.innerHTML = '<h3>Creating a new node</h3>'
para.before(div);

//insertAdjacentHTML method..
const h2 = document.getElementById('myH2');
const html = '<p>My new paragraph</p>';
h2.insertAdjacentHTML('beforeend', html);

//CallBack function problem solve...
function calculate(a,b,callBack){
    const result = a+b;
    return callBack(result);
}
function printResult(value){
    console.log(`Result is ${value}`);
}

calculate(5,5,printResult);

const num = [1,2,3,4,5];
const doubleNumber = num.map(number => number*2);
console.log(doubleNumber);

const value = [1,2,3,4,5];
const getResult = value.map(function (numm){
    return numm*2;
})
console.log(getResult);

///CallBack function practice problem solve...
function myFunction (callBackk) {
    callBackk();
}
function getresult (){
    console.log(`This is a callback Funciton`);
}
myFunction(getresult);

//2...
function greeting (getFunction){
    getFunction();
}
function greetingHandeler(){
    console.log('This is greetingHandler function');
}
greeting(greetingHandeler);

function sum (num1, num2){
    const total = num1+num2;
    return total;
}
const result = sum(5,7)
console.log(result);

const result2 = sum(5, "6")
console.log(result2)
console.log(typeof(result2))

// Input Error Validatation Check....
const multiply = function(a,b){
    total = a*b;
    return total;
}
const value = multiply(5, "seven");
console.log(value)
console.log(typeof(value));

const myFunction = function(num1, num2){
    if(typeof num1!== "number" || typeof num2!== "number"){
        return "Please enter valid input";
    }
    const multi = num1*num2;
    return multi;
}
const result = myFunction(5,"Eight");
console.log(result)

// we can use this type of error handeling in form, search item etc..
function fullName (first, second){
    if(typeof first !== "string"){
        return "First Name should be a string"
    } else if (typeof second !== "string"){
        return "Second Name should be a string";
    }
    const fullname = first+second;
    return fullname;
}

var insertName = fullName(23, "Ul Alam");
console.log(insertName);

var insertName = fullName("S M Nazib", " Ul Alam");
console.log(insertName);
//use for object...
function getPrice (product){
    if(typeof product !== "object"){
        return "Please provide  an object";
    }
    const price = product.price;
    return price;
}
const result = getPrice({
    name :"Hair Band",
    id: 'abc25',
    expDate: '8/9/2026',
    price: 500
});
console.log(result);
