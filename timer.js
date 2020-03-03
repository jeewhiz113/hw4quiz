var timer = document.getElementById("timer");
var timeRemain =60*1000; // start with 5 minutes;
function displayTime(){
      
      var seconds = timeRemain/1000;  //mod out the minutes, we are left with seconds.
      
      timeRemain -= 1000;
      
      timer.innerHTML =  seconds;
      
}

setInterval(displayTime, 1000);