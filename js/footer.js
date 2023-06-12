var currentDate = new Date().toDateString();
var currentTime = new Date().toLocaleTimeString();
var currentLocation = "North Nazimabad Branch";

$("#date").text(currentDate);
$("#time").text(currentTime);
$("#location").text(currentLocation);
setInterval(function () {
    currentDate = new Date().toDateString();
    currentTime = new Date().toLocaleTimeString();
    $("#date").text(currentDate);
    $("#time").text(currentTime);
}, 100);