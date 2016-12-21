const secondHand = document.querySelector('.seconds');
const mHand = document.querySelector('.minutes');
const hHand = document.querySelector('.hours');

function updateClock(){
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegree = (seconds/60) * 360;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    var minutes = now.getMinutes();
    var minutesDegree = (minutes/60) * 360;
    mHand.style.transform = `rotate(${minutesDegree}deg)`;

    var hours = now.getHours();
    var hoursDegree = (hours/12) * 360;
    hHand.style.transform = `rotate(${hoursDegree}deg)`;    
}

window.setInterval(updateClock, 1000);
