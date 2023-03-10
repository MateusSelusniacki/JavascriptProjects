function updateTime(){
    const date = new Date()

    function pad(num) {
        return (num < 10 ? "0" : "") + num;
    }

    document.getElementById("hours").innerHTML = pad(date.getHours())
    document.getElementById("minutes").innerHTML = pad(date.getMinutes())
    document.getElementById("seconds").innerHTML = pad(date.getSeconds())
    document.getElementById("month").innerHTML = date.getMonth()
    document.getElementById("date").innerHTML = date.getDay()
    document.getElementById("tempAbs").innerHTML = 25
    document.getElementById("tempPoint").innerHTML = 4
}
intervalId = setInterval(updateTime, 10);
