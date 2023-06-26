//The following function will play the video muted upon mouseover
var x = document.getElementById("myVideo"); 

function playVid() {
    x.volume = 0.0;
    x.play()
} 

//This function pauses the video upon mouseout action
function pauseVid() { 
    x.pause()
} 
