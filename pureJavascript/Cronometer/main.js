var timer = document.getElementById("timer");
var intervalId;
var seconds = 0, minutes = 0, hours = 0;

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            }
    }
    timer.innerHTML = pad(hours) + ":" + pad(minutes) + ":" +  pad(seconds);
}

function pad(num) {
    return (num < 10 ? "0" : "") + num;
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0; minutes = 0; hours = 0;
    timer.innerHTML = "00:00:00";
}
