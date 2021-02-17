let clock = document.getElementById('clock');
<<<<<<< HEAD
let militaryTime = false;

const convertToTwelve = document.querySelector('.twelveButton');
const convertToTwentyFour = document.querySelector('.twenty-fourButton');

convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);

 function convertHourToMilitary() {

=======
const convertToTwelve = document.querySelector('.twelveButton');
const convertToTwentyFour = document.querySelector('.twenty-fourButton');
convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);

let militaryTime = false;

 function convertHourToMilitary() {
>>>>>>> a4010e0a8acf44a286aaf5ea10670ff5a79f3663
    if (militaryTime === false) {
        militaryTime = true;

    }
}
function convertHourDefault() {
    if (militaryTime === true) {
        militaryTime = false;
    }

}

<<<<<<< HEAD
function convertHourDefault() {
    if (militaryTime === true) {
        militaryTime = false;
    }

}

setInterval(displayClock, 10);

function displayClock() {
    
=======
setInterval(displayClock, 10);

function displayClock() {

>>>>>>> a4010e0a8acf44a286aaf5ea10670ff5a79f3663
    let currentTime = new Date();

    let hoursin24 = currentTime.getHours();

    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';

    if (hoursin24 < 12) {
        amOrPm = 'AM';
    }
    else{
        amOrPm = 'PM';
    }
  
    if (hoursin24 > 12 & militaryTime === false) {
<<<<<<< HEAD
        
=======
>>>>>>> a4010e0a8acf44a286aaf5ea10670ff5a79f3663
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);
<<<<<<< HEAD
  
=======
>>>>>>> a4010e0a8acf44a286aaf5ea10670ff5a79f3663
    if (hoursin12 < 10) {
        hoursin12 = '0' + hoursin12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm;
    
    clock.innerHTML = timeNow;
    
}

displayClock();