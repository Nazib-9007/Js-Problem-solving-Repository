import {add} from './problemSolve.js';
console.log(add(5,5));

//If when arise this type of sitiution like need to change the name of function then us " as " property..

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

const para = document.getElementById('p');
const div = document.createElement('div');
div.innerHTML = '<h3>Creating a new node</h3>'
para.before(div);
