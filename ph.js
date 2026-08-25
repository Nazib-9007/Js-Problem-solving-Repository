const district = 'dhaka'
console.log(district.toUpperCase());

const disName = 'CUMILLAH'
console.log(disName.toLowerCase())

let mess = 'Hi! JavaScript. How are you?'
console.log(mess.includes('JavaScript'));
console.log(mess.length);

console.log(5 * 'Js')
console.log(5 * 0)
console.log(5 * '')
console.log(typeof(undefined))
console.log(typeof(NaN))
console.log(typeof(null))

// BMI Calculation...
const weight = process.argv[2]
const height = process.argv[3]
function calBMI (weight, height){
    const bmi = weight / (height*height);
    return bmi;
}
const result = calBMI(weight, height)
console.log(result)
if (calBMI() < 18.5){
    console.log('Underweight')
} else if(18.5 <= result && result <= 24.9){
    console.log('Normal weight')
}else if(25 <= result && result <= 29.9){
    console.log('Overweight')
}else if(30 <= result && result <= 34.9){
    console.log('Class 1 obese')
}else if(35 <= result && result <= 39.9){
    console.log('Class 2 obese')
}else{
    console.log('Class 3 obese')
}
// Moduile--->2
// Js array object
let name = ['Nazib', 'Nafiz', 'Alam', 'Orpa', 2, true];
console.log(name.length)
console.log(name[3])

// Array Methods (push, pop, shift, unshift)

let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
//splice(start_index, delete_count, item1, item2, item3...)
//object

let user = {
    name:'Nazib',
    age: 24,
    address: 'Dhaka',
    area: 'Mirpur 13'
}
delete user.age
console.log(user)
user.age = 25
console.log(user)
user.address = {
    city: 'Dhaka',
    area: '22 Teyki',
    thana: 'Kafrul Thana'
}
console.log(user)
console.log(Object.entries(user))
console.log(Object.keys(user))
//nested  data
let person = {
    name: 'John',
    age: 25,
    address: {
        city: 'Bhusan',
        languange: 'Korean',
        area_eath: 'Asia',
        zipcode: 5000
    },
    country: 'Korea',
    veihcle: ['cars', 'electric bus', 'electric bike', 'cycle']
};
console.log(person['veihcle'])
console.log(typeof(person['veihcle']))
let fruits = ['Orange', 'Mango', 'Banana', 'Apple']
let count = 0;
while(count < fruits.length){
    console.log(`Fruits: ${fruits[count]}`)
    count++;
}

//Task: How many items were purchased, and what is the total bill amount in BDT...
let cart = [
    {name: 'Shirt', price: 1200, quantity: 2},
    {name: 'Pants', price: 1800, quantity: 1},
    {name: 'Socks', price: 150, quantity: 3}
];

let totalItem = 0
let totalAmount = 0

for (const item of cart){
    totalItem += item.quantity
    totalAmount += item.price
}
console.log(`Total items: ${totalItem} and Total price: ${totalAmount} BDT`);
