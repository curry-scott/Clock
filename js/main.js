//Creating clock
const clock = document.getElementById('clock');

//Creating toggle btn for 24 hour adn 12 hour. Will switch the time.
const convertToTwelve = document.querySelector('.btn');
const convertToTwentyFour = document.querySelector('.btn');
convertToTwelve.addEventListener('click', convertHourDefault);
convertToTwentyFour.addEventListener('click', convertHourToMilitary);

//If in military time then false
let militaryTime = false;

//Will switch from regular time to military
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
//Clock displays in 1000 milliseconds in min
setInterval(displayClock, 1000);

//Showing time- hours, minutes, seconds and AM or PM
function displayClock() {

    let currentTime = new Date();
    let hoursin24 = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';
    
   //AM or PM
    if (hoursin24 < 12) {
        amOrPm = 'AM';
    }
    else{
        amOrPm = 'PM';
    }
    
    //Allow 12 hour and 24 hour to work
    if (hoursin24 > 12 & militaryTime === false) {
        hoursin24 = (24 - hoursin24) - 12;
    }

    hoursin12 = Math.abs(hoursin24);
    
    //Allowing 2 digits in clock
    if (hoursin12 < 10) {
        hoursin12 = '0' + hoursin12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

	//Showing how clock is displayed
    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm;
    
    //bringing it all together
    clock.innerHTML = timeNow;
    
}

//Time
displayClock();