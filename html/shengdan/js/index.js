// Audio Player
var audio;

function initAudioPlayer(){
       audio = new Audio();      audio.src="";
       audio.loop = true;
       audio.play(); 
}
window.addEventListener("load", initAudioPlayer);