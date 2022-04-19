var volumenGeneral;
var volgen;
let sonido2 = new Audio();
sonido2.src = "../media/cancion1.mp3";



document.body.addEventListener("click", function a() {
  volumenGeneral = Number(localStorage.getItem("miVolumen"));
  sonido2.volume = volumenGeneral;
  if(sonido2.paused){
    sonido2.play();
    
  } else {
    sonido2.pause();
   
  }

});


