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
