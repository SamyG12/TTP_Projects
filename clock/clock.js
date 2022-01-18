
//initializing a function
setInterval(function () {
    //setting up a variable to new date
    var currentTime = new Date();
    // next 3 variables are getting updated fetches of the hours
    //and minutes and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // if statements to check wether it's AM or PM
    var period = "AM";
    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours -12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + seconds;
    }

    //Displaying the time by hours mins and seconds and then the period at the end
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;

}, 1000)