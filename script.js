//Array method map, filter, forEach, Find, FindINdex problem practice..
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

//4.
const ages = [24,22,25,21,30, 10, 18, 19];
const ansAge = ages.every(a => a > 18);
console.log(ansAge);
