//Array method map, filter, forEach, Find, FindINdex problem practice...
//1..
const shopItem = [30, 45, 20,60,10];
const increasePrice = shopItem.map(price => price + 13);
console.log(increasePrice);

//2..
const nameList = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo'];
const seperateName = nameList.filter(different => different.length > 5);
console.log(seperateName);

//3..
const number = [10,15,20,25,30,35];
const findFirstData = number.find(num => num > 20);
console.log(findFirstData);

//4..
const heightData = [65,70,68,72,68,73];
const maxHeight = heightData.filter(height => height > 69);
console.log(maxHeight);

//5..
const someNumber = [7,10,15,20,25,30];
const seeNumber = someNumber.map(nums => nums/3);
console.log(seeNumber);

//6..
const frindList = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];
const findName = frindList.map(naam => naam[2]);
console.log(findName);

//7..
const nameFrnd = ['Tom', 'Harry', 'Sam', 'Jack', 'Hasan'];
const findH = nameFrnd.find(namm => namm[0] === 'H');
const findHH = nameFrnd.filter(naaam =>naaam[0] === 'H');
console.log(findH);
console.log(findHH);

//8..
const array = [1,2,3,4,5];
const writeFunction = array.forEach(arr => console.log(arr));

//9..
const animale = ['Cow', 'Goat', 'Sheep', 'Horse'];
const printAnimale = animale.forEach(ani => console.log(ani));

//Array Method some, every, flat problem practice....
//1...
const number = [1, 2,3, 101, 100, 110, 90];
const findNumber = number.some(num => num>100);
console.log(findNumber);

//2..
const num = [5,10,30,45,34, 39];
const checkNum = num.every(n => n % 5 === 0);
console.log(checkNum);

//3..
const words = ['Kello', 'Gello', 'Cello', 'Hello'];
const answer = words.some(w => w === 'Hello');
console.log(answer);
//Extra problem...
const score = [30,45,55,80,90];
const hasPassed = score.some(num => num>50);
console.log(hasPassed);

//4.
const ages = [24,22,25,21,30, 10, 18, 19];
const ansAge = ages.every(a => a > 18);
console.log(ansAge);

//Array method reduce practice problem solove...
//1...
const arr = [5,10,15,20,25];
const useReduce = arr.reduce((a,b) => a+b, 0);
console.log(`Total number: ${useReduce}`);

//2...
const owner = [
    {name: 'Shampoo', price: 100},
    {name: 'Soap', price: 50},
    {name: 'Toothpaste', price: 75}
];
const result = owner.reduce((p,q) => p+q.price, 0);
console.log(`Total price: ${result}`);

//3...
const productList = [
    {name: 'Pen', price: 5},
    {name: 'Book', price: 50},
    {name: 'Bag', price: 100}
];
const totalPrice = productList.reduce((e,s)=> e+s.price, 0);
console.log(`Total price of product: ${totalPrice}`);

//4...
const setOfnumber = [1,2,3,4,5];
const restNumber = setOfnumber.reduce((w,r)=>w*r);
console.log(restNumber);

//5...
const arr1 = [100,200,300,400,500];
const useReduce1 = arr.reduce((a,b) => a+b, 50);
console.log(`Total number: ${useReduce1}`);

//Array method sort problem solve...
//1...
const number = [50, 12, 25, 8, 15];
console.log(number.sort((a,b)=>a-b));

//2...
const desnumber = [13,2,45,9,6];
console.log(desnumber.sort((p,q)=>q-p));

//3..
const friends = [
    {name: 'Ali', age: 29},
    {name: 'Sara', age: 22},
    {name: 'Tultul', age: 35}
];
console.log(friends.sort((c,d)=> c.age - d.age));

//4...
const name = ['Sabil', 'Zubayer', 'Sarwar', 'Delower', 'Adnan'];
console.log(name.sort());


//Array method reverse problem solve...
//1...
const names = ['Zara', 'Amir', 'Saltom', 'Luna'];
console.log(names.reverse());

//2..
const users = [
    {name: 'Ali', age: 30},
    {name: 'Sara', age: 25},
    {name: 'Tatti', age: 35}
];
console.log(users.reverse());

//Array method slice and splice problem solve...
//1...
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
console.log(fruits.slice(1,3));

//2...
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
console.log(cars.slice(0,2));

//3..
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
console.log(movieList.splice(2,2,'Batman', 'Superman'));
console.log(movieList);

//4...
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
console.log(players.splice(2,1, 'Halland'));
console.log(players); 

//Array String method practice problem solve... 
//1...
const city = 'Chattogram';
console.log(city.indexOf('g'));

//2...
const division = 'Sylhet';
console.log(division.includes('y'));

//3...
const naam = 'Rifat';
console.log(naam[4]);

//4...
const language = 'Javascript';
console.log(language.indexOf('rip'));

//5...
const text = 'Immutable';
console.log(text.length, text.includes('mutable'));

//Array String method Upper and Lower case practice problem solve... 
//1...
const email = 'User@Example.Com';
console.log(email.toLowerCase());

//2...
const greeting = 'hELlo WoRLd';
console.log(greeting.toUpperCase(), greeting.toLocaleLowerCase());

//3...
const language = 'javaScript';
console.log(language.toLowerCase().includes('script'));

//4...
const text = 'nodeJs';
console.log(text[0].toLowerCase().includes('N'));

//Function and Boolean Constructor...
const strNum = '45';
const num = Number(strNum);
console.log(typeof(num));

const add = new Function('a','b', 'return a+b');
console.log(add(5,5));
const willAttend = 0;
console.log(typeof(Boolean(willAttend)));

