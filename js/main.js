let clock = document.getElementById('clock');
const time = document.getElementById('clock');
const btn = document.querySelector('button');
const b12 = document.getElementById('12');
const b24 = document.getElementById('24');


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
}

function displayClock() {
    let currentTime = new Date();
    let hoursin24 = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    lat amOrPm = ''; 

}