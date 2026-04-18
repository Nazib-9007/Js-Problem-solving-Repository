//Proble solving part - 01...
function inchToFeet(inch){
    const convert = inch / 12;
    console.log(`${inch} inch = ${convert} feet`);
}
inchToFeet(75);

function inchtoFeet(num){
    const find = num / 12;
    const feetNumber = parseInt(find);
    const reminder = num %12;
    console.log(`${feetNumber} feet ${reminder} inch`);
}
inchtoFeet(75);

function miletoKilo (nums){
    const result = nums * 1.60934;
    console.log(result);
}
miletoKilo(10);

//1..
function mileToGauge (mile){
    const result = mile * 1760;
    console.log(result);
}
mileToGauge(13);

//2..
function kiloCal(cal){
    const kiloWattHour = cal * 860;
    console.log(kiloWattHour);
}
kiloCal(10);

//3..
function hourToSecond (hour){
    const sec = hour * 3600;
    console.log(sec);
}
hourToSecond(5);

//4..
function gaugeToMeter(meter){
    const gauge = meter * 0.91;
    console.log(gauge);
}
gaugeToMeter(5);

function leapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`This is Leap Year: ${leapYear(2044)}`);

//Leap Year Finding function pactise..
//1..
function incomeStatement(incomeAmout) {
    if (incomeAmout <= 50000) {
        return 10;
    } else if (incomeAmout > 50001 && incomeAmout < 100000) {
        return 20;
    } else if (incomeAmout > 100001 && incomeAmout < 200000) {
        return 30;
    } else {
        return 40;
    }
}

console.log(`Tax on your income: ${incomeStatement(55000)}`);
//2..
function markInput(marks) {
    if (marks >= 80) {
        return 'A';
    } else if (marks >= 70 && marks <= 79) {
        return 'B';
    } else if (marks >= 60 && marks <= 69) {
        return 'C';
    } else if (marks >= 50 && marks <= 59) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(`Grade is: ${markInput(49)}`);

//3..
function findLeapYear(year) {
    let count = 0;
    for (const leap of year) {
        if ((leap % 400 === 0) || (leap % 4 === 0 && leap % 100 !== 0)) {
            count++;
        }
    }
    return count;
}
console.log(`How many leap year: ${findLeapYear([2052, 2033, 2026, 2022, 2032])}`);
console.log(`How many leap year: ${findLeapYear([2033, 2031, 2026, 2022])}`);

//Theory based practise...
function  oddArray(array){
    const oddarray = [];
    for(const key of array){
        console.log(key);
        if(key %2!==0){
            oddarray.push(key);
        }
    }
    console.log('New Odd array: ',oddarray);
    let sum = 0;
    for(const k of oddarray){
        sum = sum + k;
    }
    console.log(`Sum is : ${sum}`);
    const avg = sum/oddarray.length;
    console.log(`Average of odd array: ${avg}`);
}
oddArray([1,2,3,5,10,15,20,25]);
//1..
function evenArray (even){
    const newEvenArray = [];
    for(const k of even){
        if(k%2 === 0){
            newEvenArray.push(k);
        }
    }
    console.log(`New Even array : ${newEvenArray}`);
    let sum = 0;
    for(const key of newEvenArray){
        sum = sum + key;
    }
    console.log(`Sum is : ${sum}`);
    const avg = sum / newEvenArray.length;
    console.log(`Average of even array : ${avg}`);
}
evenArray([1,2,4,5,6,8,9,15]);
//2..
function oddMultiple(multiple){
    const newArray = [];
    for(const key of multiple){
        if(key %2 !== 0){
            newArray.push(key*2) ;
        }
    }
    return newArray;
}
console.log(`The array is : ${oddMultiple([2, 3,4,6,8,9,11,12,14,15])}`);
function duplicateValue(array){
    const newArray = [];
    for(const key of array){
        if(newArray.includes(key) === false){
            newArray.push(key);
        }
    }
    return newArray;
}
console.log(`New array is: ${duplicateValue(['Nazib', 'Nafiz', 'Nurul', 'Nazib', 'Nafiz', 'Mitu', 'Tasnim'])}`);

//Unique problem.. remove duplicate item from an array
function removeDupliValue(array){
    const newArray = [];
    for(const keys of array){
        if(newArray.includes(keys) === false){
                newArray.push(keys);
        }
    }
    return newArray;
}
console.log(`New array: ${removeDupliValue([1,5,61,5,87,7,5,81,61])}`);

//Different topic after learning.....
//Default parameter problem practise..
function defaultSalary (name = 'anonymous', salary = 0){
    return `Name: ${name} & Salary: ${salary}`;
}
console.log(defaultSalary());
console.log(defaultSalary('Nazib', 90000));

//2..
function school({principle = 1000, rate = 5} = {}){
    const interest = principle * rate / 100;
    return `Interest is : ${interest}`;
}
console.log(school({}));
console.log(school({principle: 35000, rate: 15}));

//3..
function defaultObject({ salary = 50000, tax = 10} = {}){
    const calculate = salary * tax / 100; 
    const result = salary - calculate;
    return `Persentage of my salary ${calculate} and result is: ${result}`;
}
console.log(defaultObject({}));
console.log(defaultObject({salary: 30000, tax: 20}));

//Arrow function practise..
//1..
const firstIndex = (array) => array[0];
console.log(firstIndex([5,10,20,35]));

//2..
const threeValue = (a,b,c) => a*b*c;
console.log(threeValue(2,3,5));

//3..
const defaultParameter = ()=> {
    return 'unknown';
}
console.log(defaultParameter());

//4...
const calculateMoney = (money)=> money.tk/5;// here money receive the whole person object. then use '.' to access the 'tk' property...
const person = {
    name: 'Nazib',
    tk: 10000
}
console.log(calculateMoney(person));

//5..
const findLastIndex = (array)=> {
    const a = array.length;
    const result = a - 1;
    const first = array[0];
    const newResult = first + array[result];
    return newResult;
}
console.log(findLastIndex([5,10,15,20,25]));

//6..
const addition = (a=10, b=5)=> a+b;
console.log(addition());
console.log(addition(5));
console.log(addition(undefined, 25));//when use 1 parameter without 2nd parameter then use undefind key word...
//Destructuring problem solveing...
//1..
const product = {
    name: 'Laptop',
    price: 50000,
    brand: 'Dell'
}
const {brand} = product;
console.log(brand);

//2..
const item = {
    name: 'Mobile',
    price: 20000,
    phone: 'Samsung'
}
const {phone, price} = item;
console.log(phone, price);

//3...
const colors =  ['red', 'green', 'yellow'];
const [first, second] = colors;
console.log(first, second);

//4..
const threeDIgit = [5,10,15];
const [ , sec] = threeDIgit;
console.log(sec);

//5..
const digits = [2,4,6,8];
const [two, , ,eight] = digits;
console.log(two, eight);

//6..
function multiply(a, b){
    return [a*3, b*3];
}
const [prothom, ditio] = multiply(5,10);
console.log(prothom, ditio);

//7..
const person = {
    name:'Nazib', 
    city:'Dhaka'
}
const {name, city, phoon = 'N/A'} = person;
console.log(name, city, phoon);

//8..
const teacher = {
    naae:  'Rahim',
    profession: 'Teacher'
}
const {naae, profession : job} = teacher;
console.log(naae,job);

//Rest operator problem solving...
//1..
const product = {
    name:'Laptop',
    price: 50000,
    brand:'Dell'
}
const {name, ...allRest} = product;
console.log(name, allRest);

//2..
const project = {
    id:101,
    title:'Web App',
    budget: 3000,
    client: 'Teech Corp'
}
const {title, ...newAllItem} = project;
console.log(title, newAllItem);

//3..
const programmer = {
    name: 'Sophia',
    language: 'Javascript',
    experience: 5,
    speciality: 'Frontend',
    tools: 'React'
}
const {language, speciality, ...details} = programmer;
console.log(language, speciality, details);

//4..
const numArray = [10,20,3,30,300,3000];
const [first,second, ...array] = numArray;
console.log(first, second, array);

//5..
const myFunction = (a,b,...numRest)=>{
    return console.log(a,b,numRest);
}
myFunction(1,2,3,30,50,10);

//6..
const newFunction = (...newNum)=>{
    let sum = 0;
    for(const key of newNum){
        sum = sum + key;
    }
    const avg = sum / newNum.length;
    return console.log(avg);
}
newFunction(5,10,51,20,30,40);
//Spread operator  problem solving...
//1...
const technology = ['Condition', 'array', 'loop'];
const array = ['variable',...technology];
console.log(array);

//2...
const fruits = ['Apple','Banana', 'Mango'];
const myFruits = [...fruits, 'Papaya', 'Orange'];
console.log(myFruits);

//3...
const frontEnd = ['JavaScript'], backEnd = ['Node.js'], dataBase = ['MongoDB'];
const combineArray = [...frontEnd, ...backEnd, ...dataBase];
console.log(combineArray);

//4...
const webSite = {
    name: 'Mysite',
    typpe: 'e-commerce',
    status: 'Active'
}
const newObject = {...webSite, theme:'dark'};
console.log(newObject);

//5..
const young = {
    name: 'Arif',
    age: 30,
    country: 'B Baria'
}
const {country, ...newYoungObject} = young;
console.log(newYoungObject);

//6...
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
}
const newCar = {...car, year:2032};
console.log(newCar);












