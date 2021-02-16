var blurMessage = [
  "Please come back! :-( ", 
  "Please watch my stream", 
  "orbt's twitch", 
  "I'm feeling lonely :-( ",
  "come back or ill cry :C"
];

var intervalTimer = null;
var timeoutTimer = null;

window.addEventListener("blur", function () { 
   intervalTimer = setInterval(function() {
     var rand = Math.floor((Math.random() * blurMessage.length));
     document.title = blurMessage[rand];
     timeoutTimer = setTimeout(function() {
       document.title = title;
     },4000);
   },4000);
});

window.addEventListener("focus", function(){ 
  clearInterval(intervalTimer);
  clearTimeout(timeoutTimer);
  document.title = title; 
});