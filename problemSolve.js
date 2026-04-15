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
