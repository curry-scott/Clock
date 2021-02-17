let militaryTime = false;
let clock = document.getElementById('clock')
const convertToTwelve =
document.querySelector('.twelveButton');
const convertToTwentyFour = 
document.querySelector('twento-fourButton');

function convertHourToMilitary() {
    if (militaryTime === falso) {
        militaryTime = true;
    }
}

setInterval(displayClock, 1000);

function displayClock() {
    let currentTime = new Date();
    let hoursin24 = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amORPm = '';
    if (hoursin24 >= 12) {
        amORPm = 'PM'
    }
    else{
        amORPm = 'AM'
    }
    if (hoursin24 >12 & militaryTime === false) {
        hoursin24 = (24 - hoursin24) - 12;
        }

        hoursin12 = Math.abs(hoursin24);
        if (hoursin12 <10) {
            hoursin12 = '0' + hoursin12;
        }
        if (minutes <10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds; 
        }
        let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amORPm;
        clock.innerHTML = timeNow;
    }

    displayClock();