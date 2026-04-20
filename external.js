// const userInput = Number(prompt('Enter your age: '));
// if(userInput > 18){
//     console.log('You are an adult');
// } else{
//     console.log('You are a minor');
// }

// const Userinput = prompt('Enter a password');
// while(Userinput !== "secret123"){
//     Userinput = prompt('Wrong! try again');
// }
// alert('Access granted');

let color = ['Red', 'Green', 'Blue'];
let push = color.push('Yellow');
console.log(push, color.length);
let pop = color.pop();
console.log(pop, color.length);

function calculate (width, height){
    return width * height;
}
console.log(calculate(5,5));

function greetUser (name){
    return `Hello ${name}, welcome to the class`;
}
const givenName = greetUser('Nazib');

let Name = document.querySelector('#message');
Name.innerHTML = givenName;
