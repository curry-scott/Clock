const clock = document.getElementById('clock');
const b12 = document.getElementById('12');
const b24 = document.getElementById('24');
let base = 12;
b24.onclick = function milTime() {
    base =24;
    updateTime()
}
b12.onclick = function regTime() {
    base = 12;
    updateTime()
}

function showTime() {
    let time = new Date(); 
    let milTime = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';
}