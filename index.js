var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hrs = document.getElementById("hours");
var day = document.getElementById("days");

var currentDays = 0,currentHours = 0, currentMinutes = 0, currentSeconds = 0;

// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(currentDays!=days){
    day.style.animation='1s flip 1 ease';
    currentDays = days;    
    setTimeout(function(){ day.style.animation='none';day.innerHTML = days; }, 1000);
  }
  if(currentHours!=hours){
    hrs.style.animation='1s flip 1 ease';
    currentHours = hours;    
    setTimeout(function(){ hrs.style.animation='none';hrs.innerHTML = hours; }, 1000);
  }
  if(currentMinutes!=minutes){    
    min.style.animation='1s flip 1 ease';
    currentMinutes = minutes;    
    setTimeout(function(){ min.style.animation='none'; min.innerHTML = minutes;}, 1000);
  }
  if(currentSeconds!=seconds){    
    sec.style.animation='1s flip infinite ease';
    currentSeconds = seconds;    
    setTimeout(function(){ sec.innerHTML = seconds;}, 1000);
  }  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("message").innerHTML = "EXPIRED";
  }
}, 1000);
