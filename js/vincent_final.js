function sayThankYou() {
    var emailElement = document.getElementById("userEmail");
    var email = emailElement.value;
    var message = "";

    if (email == '') {
        message = "You must enter your email adress";
        alert(message);
    } else {
        message = "Thank You!\nWe will send You email to <" + email + "> weekly :D";
        alert(message);
    }
}




// global variables for Vincent's birthday count down calculations
var vincentsBirthDay = new Date(2018, 07, 29);
var now = new Date();
var diffInMilliSeconds = vincentsBirthDay - now;
var diffInSeconds = Math.round(diffInMilliSeconds / 1000);

// count down until Vincent's next birthday
function countdown() {
    // decrement diff by on seconds
    diffInSeconds--;

    // transform the diff
    var days = Math.floor(diffInSeconds / (24 * 60 * 60));
    var hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
    var seconds = Math.floor(diffInSeconds % 60);

    // display the diff
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // check if we should stop counting
    if (isNegative(diffInSeconds)) {
        // stop repetition
        clearInterval(intervalIdentifier);
        // display appropriate message
        placeholder.innerHTML = "Today is Vincent's birthday!"
    }
}

// setup countdown function to be execute once in a second
var intervalIdentifier = setInterval(countdown, 1000);
console.log(intervalIdentifier);

function mousePos(event) {
    var pictureMessageElement = document.getElementById("pictureMessage");
    var rect = event.target.getBoundingClientRect();
    var x = Math.round(event.pageX - rect.x);
    var y = Math.round(event.pageY - rect.y);
    pictureMessageElement.innerHTML = x + "," + y;
}
