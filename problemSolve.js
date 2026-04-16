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

