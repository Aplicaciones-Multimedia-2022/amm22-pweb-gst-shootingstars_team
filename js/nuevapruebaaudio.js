
sonido1.src = "../audio/click/39562__the-bizniss__mouse-click.wav";

var ruta;
var vol;
let sonido2= new Audio();
sonido2.src="../audio/cancion1.mp3";


play.addEventListener("click", function(){
    sonido2.play();
  });

  
barra.addEventListener("change", function(ev) {}, true);
barra.addEventListener(
    "change",
    function(ev) {
    sonido2.volume = ev.currentTarget.value;
    vol=ev.currentTarget.value;
    localStorage.setItem("miVolumen", vol);
    },
    true
);