const clock = document.getElementById('clock');
const time = document.getElementById('clock');
const btn = document.querySelector('button');
const b12 = document.getElementById('12');
const b24 = document.getElementById('24');





function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 