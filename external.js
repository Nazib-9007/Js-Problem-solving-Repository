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
//Js previous topic problem solving...
const subject = ['Algorithim', 'Data Structure', 'Javascript', 'Digital signal processing', 'signal system'];
for(const key of subject){
    console.log(key);
}

//
const examDate = ['20-04-2026', '25-04-2026'];
for(const keys of examDate){
    console.log(keys);
}

let count = 0;
while (count < 10) {
    console.log('আমি প্রতিদিন মিনিমাম ৩ ঘন্টা করে কোড করি।।');
    count++;
}

// 
let number = 1;
while (number < 21) {
    console.log(number);
    number++;
}

//

let table = 1;
while (table < 11) {
    let multiplication = table * 3;
    console.log(`${table} x 3 = ${multiplication}`);
    table++;
}

//

let divide = 100;
while (divide < 111) {
    let answer = divide / 2;
    console.log(answer);
    divide++;
}
