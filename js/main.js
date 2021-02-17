let clock = document.getElementById('clock');
let militaryTime = false;

<<<<<<< HEAD
let clock = document.getElementById('clock');

=======
>>>>>>> d97179ebc7374cf00521ba40284b7a13b281b802
const convertToTwelve = document.querySelector('.twelveButton');
const convertToTwentyFour = document.querySelector('.twenty-fourButton');

convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);

<<<<<<< HEAD

=======
>>>>>>> d97179ebc7374cf00521ba40284b7a13b281b802
 function convertHourToMilitary() {

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
=======
function convertHourDefault() {
    if (militaryTime === true) {
        militaryTime = false;
    }

}

>>>>>>> d97179ebc7374cf00521ba40284b7a13b281b802
setInterval(displayClock, 10);

function displayClock() {
    
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
        
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);
  
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